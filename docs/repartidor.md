# El repartidor del Lab

Para quien lleva el Lab. El equipo no necesita saber nada de esto: le dice a Claude «publica esta página en el Lab con mi nombre» y recibe `https://lab.charlysway.com/<su-nombre>/<pagina>/`.

## El problema que resuelve

Cada despliegue de Cloudflare Pages es una foto completa de la carpeta que se sube. Si varias personas publicaran en `main` desde su ordenador, cada una sustituiría el Lab entero por su copia y borraría las páginas de las demás.

## Cómo funciona

1. Cada persona publica en **su rama**, con su nombre: `--branch=ana`. Esa rama tiene su propia dirección, `https://ana.cw-lab.pages.dev`, y solo la toca ella.
2. El despliegue de `main` (la portada y las páginas comunes) lleva `functions/_middleware.js`. Para cada petición a `lab.charlysway.com`:
   - Si la ruta existe en `main`, se sirve tal cual (portada, `/bienvenida-equipo/`, `/ejemplo/`…).
   - Si no existe y empieza por un nombre válido (`/ana/…`), pide lo mismo a `https://ana.cw-lab.pages.dev/…` y lo devuelve. Los enlaces de raíz de la página (`/bienvenida/gracias/`) se reescriben a `/ana/bienvenida/gracias/`, y también las redirecciones.
   - Si esa rama no existe o la página no está, sale `sandbox/404.html` («Esta página no existe»).
3. `sandbox/404.html` es imprescindible: sin él, Pages devuelve la portada con código 200 para cualquier ruta desconocida y el repartidor no sabría distinguir «no existe en main» de «es una persona».

## Reglas y límites

- Solo reparte en `lab.charlysway.com`, `cw-lab.pages.dev` y `repartidor.cw-lab.pages.dev` (rama de pruebas). En las ramas de las personas no reparte, y las peticiones que hace el propio repartidor llevan la cabecera `x-lab-repartidor`, así que no hay bucles.
- Nombre válido: minúsculas, números y guiones, de 1 a 28 caracteres, sin empezar ni acabar en guion. Solo se consulta `*.cw-lab.pages.dev`: no sirve de proxy hacia ningún otro sitio.
- Nombres reservados: `main`, `master`, `production`, `preview`, `repartidor`, `www`, `lab`, `cdn-cgi`, `functions`, y cualquier carpeta que exista en `sandbox/` (esas rutas las sirve `main` antes de llegar al repartidor).
- Solo `GET` y `HEAD`. Las respuestas llevan `x-robots-tag: noindex, nofollow`.

## Probado el 28-sep-2026

En `repartidor.cw-lab.pages.dev` y después en producción: portada, `/bienvenida-equipo/`, `/ejemplo/`, `/ejemplo/gracias/`, `/ejercicio` y `robots.txt` responden igual que antes (200); `/maria/…` y `/prueba-ana/bienvenida/` (con CSS, imagen, `srcset` y página de gracias enlazada desde la raíz) se ven por el repartidor; `/prueba-ana` redirige a `/prueba-ana/`; nombres inexistentes, mayúsculas, puntos, `%2F`, `@`, nombres de 40 letras, `main` y `/prueba-ana/prueba-ana/…` acaban en el 404 amable.

Ramas de prueba que se crearon: `repartidor` (el Lab con el repartidor, para probar antes de producción) y `prueba-ana` (una página de ejemplo con enlaces internos). Se pueden borrar desde el panel de Cloudflare (Workers & Pages → cw-lab → Deployments) cuando ya no hagan falta.

## Si hay que quitarlo

Borrar `functions/` y `sandbox/404.html` y volver a publicar `main`. Las ramas de las personas siguen funcionando en `https://<nombre>.cw-lab.pages.dev/<pagina>/`.
