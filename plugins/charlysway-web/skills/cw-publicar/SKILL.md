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

**Cada persona publica siempre con su nombre del Lab**: una palabra corta en minúsculas, sin acentos ni espacios. Puede ser su nombre (`maria`, `maria-jose`) o cualquier otra (`ventas`, `equipo-marketing`). Así cada una tiene su dirección y no pisa a nadie. Antes de publicar, resuelve ese nombre así:

1. **¿Ya lo tiene?** Si en la raíz del proyecto existe el archivo `.lab-nombre`, su contenido (una línea) es el nombre de esta persona: úsalo sin preguntar y sin comprobar nada más.
2. **Si no lo tiene**, usa el que te haya dicho o pregúntale con qué nombre quiere publicar en el Lab (su nombre o cualquier palabra corta), y conviértelo tú al formato (`María José` → `maria-jose`). No puede ser uno de los reservados (lista de abajo).
3. **Comprueba que está libre** con una petición a `https://<nombre>.cw-lab.pages.dev/`: si responde **404**, está libre; cualquier otra respuesta significa que ya lo usa otra persona del equipo. (Con curl: `curl -s -o /dev/null -w "%{http_code}" https://<nombre>.cw-lab.pages.dev/`. En PowerShell, `Invoke-WebRequest` lanza un error con el 404: captúralo y léelo como «libre».)
4. **Si está ocupado, NO publiques todavía.** Díselo claro, en tono amable y sin tecnicismos, proponle una alternativa libre (compruébala también) y **espera su respuesta**: «El nombre ana ya existe en el Lab. Si es tuyo de antes (publicaste desde otro ordenador), dímelo y sigo con él; si no, ¿te vale ana-g u otro que prefieras?». Que la persona haya escrito «mi nombre es ana» o «publica con mi nombre: ana» NO significa que ese nombre del Lab sea suyo: solo sigues con un nombre ocupado si te confirma expresamente que ya publicó antes con él.
5. **Cuando tengas el nombre**, publica y guárdalo en `.lab-nombre` (solo el nombre, una línea) para las próximas veces.

```bash
npx wrangler pages deploy sandbox --project-name=cw-lab --branch=<tu-nombre> --commit-dirty=true --env-file=.env
```

La página queda en **`https://lab.charlysway.com/<tu-nombre>/<carpeta>/`**. **Da siempre ese enlace, completo.** El Lab tiene un repartidor que enseña en `lab.charlysway.com/<nombre>/` lo que cada persona ha publicado con su nombre, así que nadie pisa a nadie aunque dos personas llamen igual a su página. (La misma página está también en `https://<tu-nombre>.cw-lab.pages.dev/<carpeta>/`, pero el enlace para compartir es el de lab.charlysway.com.)

Nombres que no sirven porque ya están ocupados en el Lab: `main`, `master`, `production`, `preview`, `repartidor`, `www`, `lab`, `functions`, y los de las carpetas que ya hay en `sandbox/` (por ejemplo `ejemplo` o `bienvenida-equipo`). Si el nombre de la persona coincide, usa su nombre y la inicial del apellido (`ana-g`).

**La rama `main` (el Lab principal) no se publica desde el ordenador de nadie del equipo:** cada publicación ahí sube la carpeta `sandbox/` entera de ese ordenador y sustituye la portada y las páginas comunes del Lab. Eso lo hace solo quien lleva el Lab.

Después de publicar, **abre la URL y compruébala** antes de darla por buena. La vista previa del chat no cuenta: ahí las imágenes externas salen rotas siempre.

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
