---
name: cw-publicar
description: Publica una pieza HTML de Charly's Way en el entorno de pruebas lab.charlysway.com y devuelve la URL. Úsala cuando haya que subir, publicar, desplegar o "poner online" una página del equipo, o cuando alguien pida ver su pieza en una URL real en vez de en la vista previa.
---

# Publicar en el lab

El lab (`lab.charlysway.com`) es el entorno de pruebas del equipo. Está en una cuenta de Cloudflare separada de todo lo de producción, así que aquí no se puede romper nada importante. Es el sitio donde practicar y donde alojar piezas internas del día a día.

## Antes de publicar

1. Pasa el checklist de marca de la skill `cw-marca`. Una pieza fuera de marca no se publica.
2. Comprueba las reglas del carril, abajo. Si la pieza incumple una, **no la publiques y dilo**.
3. La pieza debe ser un `index.html` autocontenido dentro de su propia carpeta.

## Estructura

Cada pieza vive en su carpeta, y el nombre de la carpeta es la URL:

```
sandbox/
  bienvenida-equipo/index.html   →  lab.charlysway.com/bienvenida-equipo/
  guia-onboarding/index.html     →  lab.charlysway.com/guia-onboarding/
```

Nombres de carpeta en minúsculas, con guiones, sin acentos ni espacios.

## Publicar

Las credenciales del lab viven en el archivo `.env` de la raíz del proyecto, que está fuera de git. Wrangler las lee solo con pasarle `--env-file=.env`, así que no hay que exportar nada.

Si el archivo no existe, cópialo de `.env.example` y pide las credenciales. **Nunca uses credenciales de producción aquí.**

### Dos formas de publicar: la persona elige

| Forma | Enlace que recibe | Cuándo |
|---|---|---|
| **Dirección directa** | `https://lab.charlysway.com/<direccion>/` | Una página suelta con su propia dirección corta. Cada página, su dirección. |
| **Dentro de su carpeta** | `https://lab.charlysway.com/<su-carpeta>/<pagina>/` | Tener todas sus páginas juntas bajo un mismo nombre (el suyo o cualquier palabra: `ana`, `ventas`). |

Cómo saber cuál quiere:

- «Publícala en el Lab **con la dirección** bienvenida» o «**como** bienvenida» → dirección directa: `lab.charlysway.com/bienvenida/`.
- «Publícala en el Lab **en mi carpeta** ana» o «**con el nombre** ana» → dentro de su carpeta: `lab.charlysway.com/ana/<pagina>/`.
- Si ya tiene carpeta (existe el archivo `.lab-nombre`, ver abajo) y no dice otra cosa → dentro de su carpeta.
- Si no queda claro, pregúntaselo con los dos ejemplos, en una frase: «¿La quieres con dirección directa (lab.charlysway.com/bienvenida/) o dentro de tu carpeta (lab.charlysway.com/ana/bienvenida/)?».

La dirección o la carpeta es una palabra corta en minúsculas, sin acentos ni espacios: conviértela tú (`María José` → `maria-jose`, `Guía de vacaciones` → `guia-vacaciones`). No puede ser uno de los nombres reservados (lista de abajo).

### Antes de publicar: que la dirección esté libre

Las dos formas comparten el mismo espacio de nombres, así que la comprobación es la misma:

1. **Comprueba que está libre** con una petición a `https://<nombre>.cw-lab.pages.dev/`: si responde **404**, está libre; cualquier otra respuesta significa que ya la usa otra persona. (Con curl: `curl -s -o /dev/null -w "%{http_code}" https://<nombre>.cw-lab.pages.dev/`. En PowerShell, `Invoke-WebRequest` lanza un error con el 404: captúralo y léelo como «libre».)
2. **Si está ocupada, NO publiques todavía.** Díselo claro, en tono amable y sin tecnicismos, proponle una alternativa libre (compruébala también) y **espera su respuesta**: «La dirección ana ya existe en el Lab. Si es tuya de antes (publicaste desde otro ordenador), dímelo y sigo; si no, ¿te vale ana-g u otra que prefieras?». Que la persona haya escrito «mi nombre es ana» o «publica con el nombre ana» NO significa que sea suya: solo sigues con una dirección ocupada si te confirma expresamente que ya publicó antes con ella.
3. **Excepción, su propia carpeta:** si existe `.lab-nombre` en la raíz del proyecto, esa carpeta es suya: úsala sin preguntar y sin comprobar (está ocupada precisamente porque es suya). Lo mismo si vuelve a publicar una página directa que ya publicó ella en esta misma sesión.

### Publicar con dirección directa

La carpeta de la página (con su `index.html`) se sube sola, como raíz de esa dirección:

```bash
npx wrangler pages deploy sandbox/<carpeta-de-la-pagina> --project-name=cw-lab --branch=<direccion> --commit-dirty=true --env-file=.env
```

Enlace: **`https://lab.charlysway.com/<direccion>/`**. En esta forma, los enlaces internos de la página (imágenes propias, otra página suya) tienen que ser **relativos** (`img/foto.jpg`, `gracias/`), no desde la raíz.

### Publicar dentro de su carpeta

```bash
npx wrangler pages deploy sandbox --project-name=cw-lab --branch=<su-carpeta> --commit-dirty=true --env-file=.env
```

Enlace: **`https://lab.charlysway.com/<su-carpeta>/<carpeta-de-la-pagina>/`**. Después de la primera vez, guarda el nombre de la carpeta en `.lab-nombre` (solo el nombre, una línea) para las próximas veces.

### En las dos formas

- **Da siempre el enlace de lab.charlysway.com, completo.** (La misma página está también en `https://<nombre>.cw-lab.pages.dev/…`, pero el enlace para compartir es el de lab.charlysway.com.) El Lab tiene un repartidor que enseña en `lab.charlysway.com/<nombre>/` lo que se ha publicado con ese nombre: nadie pisa a nadie.
- **La primera vez que se publica con un nombre nuevo, el enlace tarda uno o dos minutos en funcionar** y mientras enseña «Esta página no existe». Avísalo al dar el enlace («si te sale "no existe", espera un minuto y recarga»). Para comprobarlo tú, abre primero `https://<nombre>.cw-lab.pages.dev/…`, que funciona al momento.
- Después de publicar, **abre la URL y compruébala** antes de darla por buena. La vista previa del chat no cuenta: ahí las imágenes externas salen rotas siempre.

Nombres reservados (no sirven ni como dirección ni como carpeta): `main`, `master`, `production`, `preview`, `repartidor`, `www`, `lab`, `functions`, y los de las carpetas que ya hay en `sandbox/` (por ejemplo `ejemplo` o `bienvenida-equipo`).

**La rama `main` (el Lab principal) no se publica desde el ordenador de nadie del equipo:** cada publicación ahí sube la carpeta `sandbox/` entera de ese ordenador y sustituye la portada y las páginas comunes del Lab. Eso lo hace solo quien lleva el Lab.

## Reglas del carril

Innegociables. Si una pieza las incumple, no se publica:

1. **Nada de datos de personas.** Ni leads, ni listas de alumnos, ni emails, ni teléfonos, ni capturas del CRM. El lab no tiene consentimiento ni aviso legal.
2. **Ningún formulario que envíe datos a algún sitio.** Maquetar un formulario está bien, conectarlo no.
3. **Nada de credenciales, tokens ni claves** dentro del HTML.
4. **Nada confidencial:** cifras de facturación, contratos, datos de clientes.
5. **No se toca producción.** `charlysway.com`, `charlyswayacademy.com`, `metodo.charlysway.com` y `lp.charlysway.com` no se despliegan desde aquí, jamás. Si la pieza tiene que acabar en una de esas, pásala a Tecnología.
6. El lab lleva `noindex`: no lo va a encontrar Google, pero **cualquiera con el link puede verlo**. Trátalo como semipúblico.

## Si algo falla

| Síntoma | Qué pasa |
|---|---|
| `Authentication error` o `code: 10000` | El token no es válido o es de otra cuenta. Comprueba las dos variables de entorno |
| `Project not found` | El nombre del proyecto no es `cw-lab`, o el token no tiene permiso sobre él |
| Publica pero la URL da 404 | La pieza no está en `sandbox/<carpeta>/index.html`, o el archivo no se llama `index.html` |
| La URL sale bien pero sin estilos ni imágenes | Rutas relativas rotas. Usa las URLs absolutas de los assets oficiales |
| Sale la versión vieja | Recarga saltando caché (Ctrl+F5). Si sigue, comprueba que desplegaste la rama correcta |

Nunca resuelvas un problema de permisos usando credenciales de producción. Si el token del lab no funciona, se pide uno nuevo del lab.
