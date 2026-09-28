---
name: cw-empezar
description: Explica al usuario cómo convertir un HTML en una página de Charly's Way y publicarla con su enlace. Es el punto de entrada para quien no ha hecho esto antes. Úsala cuando alguien pregunte por dónde empezar, cómo funciona esto, cómo publico una página o cómo paso algo a la marca.
---

# Convertir un HTML en una página de Charly's Way

De un HTML cualquiera a una página con la imagen de la marca y su enlace para compartir. Sin pasar por Tecnología y sin tocar nada de producción.

**Si te han invocado, no expliques todo de golpe.** Pregunta primero qué quiere hacer la persona (pasar un HTML que ya tiene, empezar de cero, o publicar algo terminado) y llévala solo por esa parte. El resto está aquí para cuando haga falta.

## Preparar el equipo (esto se hace una vez)

Clona el repo y crea dentro un archivo llamado `.env` con las credenciales del Lab, que te pasan por privado:

```
CLOUDFLARE_ACCOUNT_ID=...
CLOUDFLARE_API_TOKEN=...
```

Ese archivo no se sube a ningún sitio, ya está excluido del repositorio. Y no hay que exportar nada: el comando de publicar lo lee solo.

## Tienes un HTML y quieres que parezca de Charly's Way

Este es el caso más habitual. Da igual de dónde salga el HTML: de Claude, de una plantilla o de una web que te han pasado.

Guarda el archivo en tu carpeta del proyecto y pide esto:

> Coge este HTML y pásalo a la marca de Charly's Way, respetando el contenido. Cambia colores, tipografías y componentes, no el texto.

Si además quieres que revise el contenido:

> Ahora repasa el texto y ajústalo al tono de la marca.

Lo que va a hacer: sustituir la paleta por la de la marca, poner Antonio en los titulares y Poppins en el cuerpo, cambiar botones y tarjetas por los componentes de Charly's Way, quitar sombras y degradados, y colocar el logo y los fondos oficiales.

## O empiezas de cero

> Hazme una página interna para [quién] que explique [qué], con [las secciones que quieras]. Es para uso interno del equipo.

## Publicar y conseguir el enlace

Tu página va en su propia carpeta dentro de `sandbox/`, y el nombre de la carpeta es su dirección:

```
sandbox/guia-onboarding/index.html   →   lab.charlysway.com/<tu-nombre>/guia-onboarding/
```

El archivo tiene que llamarse `index.html`. La carpeta, en minúsculas, con guiones y sin acentos.

### Varias páginas enlazadas

La estructura de carpetas es la estructura de direcciones, así que puedes montar un flujo entero:

```
sandbox/
  mi-landing/index.html          →  /mi-landing/
  mi-landing/gracias/index.html  →  /mi-landing/gracias/
  mi-landing/imagenes/foto.jpg   →  /mi-landing/imagenes/foto.jpg
```

- Una carpeta con `index.html` dentro es una dirección limpia.
- Enlaza entre páginas con la ruta desde la raíz y barra final: `<a href="/mi-landing/gracias/">`.
- Un archivo suelto también sirve: `nota.html` queda en `/nota`, sin extensión.
- Si escribes mal una dirección verás el aviso «Esta página no existe». Revisa tu nombre y el de la página, o pídele a Claude el enlace completo.

Para publicar, dile a Claude «publica esta página en el Lab con mi nombre». Por debajo lanza esto, con tu nombre en minúsculas y sin acentos:

```bash
npx wrangler pages deploy sandbox --project-name=cw-lab --branch=<tu-nombre> --commit-dirty=true --env-file=.env
```

Tu página queda en **`https://lab.charlysway.com/<tu-nombre>/<carpeta>/`**. Cada persona tiene su parte del Lab con su nombre, así que nadie pisa a nadie.

El Lab principal (la rama `main`) no se publica desde tu ordenador: lo lleva una sola persona.

**Abre siempre la URL publicada antes de darla por buena.** La vista previa del chat no sirve para juzgar.

## Pedir cambios

Cambia una cosa cada vez y deja el resto quieto:

> Cambia solo [la parte]. Deja el resto igual.

Si algo no te convence pero no sabes qué es:

> Revisa esta página contra la marca y dime qué está fuera de sitio, sin cambiar nada todavía.

Antes de publicar:

> Pásale el checklist de marca y dime si hay algo que no cumple.

Si falta un dato:

> Para esta sección necesito [el dato]. No lo tengo. Deja un hueco marcado y sigue con el resto.

## Lo que te va a pasar

**Las imágenes salen rotas en la vista previa.** La página está bien. La vista previa del chat bloquea las imágenes externas por seguridad. Publica y ábrela.

**Te apetecerá reescribir el prompt entero.** No lo hagas. Pide el cambio concreto.

**Se inventará un dato si le dejas.** Cifras, testimonios, fechas y precios se preguntan. Si no lo tienes, se queda el hueco.

**La primera versión casi nunca es la buena.** Arreglarla cuesta un minuto.

## Lo que no se sube aquí

- Datos de personas: leads, alumnos, emails, teléfonos, capturas del CRM.
- Formularios conectados que envíen información a algún sitio.
- Claves, tokens o contraseñas dentro del HTML.
- Cifras de facturación, contratos o cualquier cosa confidencial.
- Nada que vaya a las webs de producción. Eso pasa por Tecnología.

El Lab no aparece en Google, pero cualquiera con el enlace entra. Si no lo pondrías en una pizarra de la oficina, no lo subas.

## Si algo falla

| Te pasa esto | Haz esto |
|---|---|
| No aparece `/cw-marca` | Reinicia Claude Code. Si sigue sin salir, repite los dos comandos de instalación |
| Error de autenticación al publicar | Falta el archivo `.env`, o le falta `--env-file=.env` al comando |
| Publica pero la URL da 404 | El archivo tiene que llamarse `index.html` y estar dentro de `sandbox/tu-carpeta/` |
| Se ve sin estilos ni imágenes | Rutas rotas. Pide que use las URLs oficiales de los assets |
| Sale la versión antigua | Recarga con Ctrl+F5 |
