# La skill para claude.ai (la web)

Esta carpeta es la versión de la skill de marca para quien trabaja en **claude.ai**, no en Claude Code. Es el mismo contenido de marca, adaptado a un entorno sin terminal.

## Instalarla (una vez por persona)

1. Descarga `charlysway-skill.zip`.
2. En claude.ai, entra en **Ajustes → Capacidades → Skills** (según el idioma, aparece como *Customize → Skills* o *Settings → Capabilities*).
3. Pulsa **+ Create skill** y sube el ZIP.

A partir de ahí, cuando pidas una pieza para Charly's Way, Claude la aplica sola.

**Requisito:** las skills personalizadas están en los planes Pro, Max, Team y Enterprise, con la ejecución de código activada. En el plan gratuito no aparece la opción.

**Si el equipo tiene plan Team**, no hace falta que cada persona suba el ZIP: se puede provisionar la skill para toda la organización desde la administración de la cuenta, y le aparece a todo el mundo.

## Publicar una pieza desde claude.ai

Como en la web no hay terminal, se publica desde el panel de Cloudflare:

1. Descarga el HTML del artifact y renómbralo a `index.html`.
2. Entra en el panel de Cloudflare de la cuenta del Lab: **Workers & Pages → cw-lab → Create deployment**.
3. Elige **Preview** y pon tu nombre como rama. Así cada persona tiene su URL y nadie pisa a nadie.
4. Arrastra el archivo y despliega.

Tu página queda en `https://lab.charlysway.com/<tu-nombre>/` (y también en `https://<tu-nombre>.cw-lab.pages.dev`).

**Nunca elijas Production desde el panel.** Un despliegue sustituye todo lo publicado por lo que arrastras: si subes solo tu `index.html`, el Lab entero pasa a ser tu página y desaparece todo lo demás. Lo que tenga que quedarse en `lab.charlysway.com` lo publica quien lleva el Lab.

## Cuando la skill cambie

Las skills subidas a claude.ai no se actualizan solas. Cuando cambie el contenido de marca hay que volver a descargar el ZIP y subirlo de nuevo, reemplazando el anterior.

Por eso conviene decidir quién es responsable de avisar al equipo cuando haya una versión nueva.

## Diferencia con Claude Code

| | claude.ai | Claude Code |
|---|---|---|
| Instalar la skill | Subir el ZIP en ajustes | Dos comandos de plugin |
| Publicar | Arrastrar al panel de Cloudflare | Un comando en la terminal |
| Actualizaciones | Manuales, resubiendo el ZIP | Reinstalando el plugin |

El contenido de marca es el mismo en las dos.
