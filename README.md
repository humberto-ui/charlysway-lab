# Charly's Way — skill de marca + El Lab

Dos cosas viven en este repo:

1. **La skill de marca** (`plugins/charlysway-web/`), que hace que Claude Code construya piezas web con la identidad de Charly's Way sin que tengas que explicarle nada.
2. **El Lab** (`sandbox/`), el entorno de pruebas donde el equipo publica sus piezas, en `lab.charlysway.com`.

## La skill viene dentro

No hay que instalar nada. Las skills de marca están en `.claude/skills/` y Claude Code las carga solo al abrir una sesión **en esta carpeta** (en la terminal o en la pestaña Code de la app de escritorio, eligiendo la carpeta). Comprueba que funcionan escribiendo `/cw-empezar`.

Para el equipo: se descarga la carpeta (sin cuenta de GitHub, también como ZIP: https://github.com/humberto-ui/charlysway-lab/archive/refs/heads/master.zip), se crea el `.env` con las dos claves del Lab y ya está.

`.claude/skills/` es una copia de `plugins/charlysway-web/skills/`: si cambias una, cambia la otra.

### Como plugin (opcional, solo en la terminal)

Quien quiera la skill en cualquier carpeta puede instalarla como plugin, **solo desde Claude Code en la terminal** (en la app de escritorio el comando `/plugin` no está disponible y añadir el catálogo necesita Git):

```
/plugin marketplace add humberto-ui/charlysway-lab
/plugin install charlysway-web@charlysway
```

> **Este repo es público y no contiene credenciales.** Las claves del Lab viven en variables de entorno de cada persona, nunca aquí. Si alguna vez tienes que pegar un token en un archivo, ese archivo no va al repo.

### Cuando la skill se actualice

`/plugin update` no siempre recoge los cambios. Lo que funciona seguro son estos tres, en este orden:

```
/plugin marketplace update charlysway
/plugin uninstall charlysway-web
/plugin install charlysway-web@charlysway
```

## Qué te da

| Skill | Para qué |
|---|---|
| `/cw-empezar` | Por dónde empiezo. Te lleva de un HTML cualquiera a una página publicada con su enlace |
| `/cw-marca` | Construir o revisar una pieza con la marca puesta: colores, tipografías, componentes, voz |
| `/cw-publicar` | Publicar la pieza en el Lab y obtener su URL |

Las dos últimas no hace falta invocarlas a mano. Si le pides a Claude "hazme una página de bienvenida para el equipo", carga la de marca sola. `/cw-empezar` es la que escribes tú el primer día.

## Publicar una pieza

Cada pieza vive en su carpeta dentro de `sandbox/`, y el nombre de la carpeta es la dirección:

```
sandbox/bienvenida-equipo/index.html  →  lab.charlysway.com/bienvenida-equipo/        (páginas comunes)
sandbox/mi-guia/index.html            →  lab.charlysway.com/<tu-nombre>/mi-guia/     (lo que publicas tú)
```

Necesitas un archivo `.env` en la raíz con las credenciales del Lab (nunca las de producción). Cópialo de `.env.example`. No hay que exportar nada: wrangler lo lee con `--env-file=.env`.

Cada persona publica con su nombre (en minúsculas y sin acentos) y su página sale en `https://lab.charlysway.com/<tu-nombre>/<carpeta>/`. Nadie pisa a nadie:

```bash
npx wrangler pages deploy sandbox --project-name=cw-lab --branch=<tu-nombre> --commit-dirty=true --env-file=.env
```

Lo hace un repartidor del Lab (`functions/_middleware.js`, explicado en `docs/repartidor.md`). La rama `main` (portada y páginas comunes) la publica solo quien lleva el Lab:

```bash
npx wrangler pages deploy sandbox --project-name=cw-lab --branch=main --commit-dirty=true --env-file=.env
```

## Reglas del Lab

- Nada de datos de personas: leads, alumnos, emails, teléfonos, capturas del CRM.
- Nada de formularios conectados, claves ni información confidencial.
- Producción (`charlysway.com`, la academy, el método y `lp.charlysway.com`) no se toca desde aquí. Eso pasa siempre por Tecnología.
- El Lab lleva `noindex`, pero cualquiera con el link entra. Trátalo como semipúblico.

## Estructura

```
.claude-plugin/marketplace.json      catálogo para /plugin marketplace add
plugins/charlysway-web/
  .claude-plugin/plugin.json
  skills/cw-empezar/SKILL.md         punto de entrada: de un HTML a una página publicada
  skills/cw-marca/SKILL.md           identidad de marca
    references/tokens.css            colores, tipos y escala listos para pegar
    references/plantilla.html        página de arranque completa
    references/componentes.md        hero, cards, CTAs, FAQ, formularios
    references/assets.md             URLs oficiales de logos y fondos
    references/webs-reales.md        cómo es CW en digital, medido sobre las webs
  skills/cw-publicar/SKILL.md        publicar en el Lab
sandbox/                             lo que se publica en lab.charlysway.com
  index.html                         portada del Lab con las reglas
  bienvenida-equipo/index.html       pieza de ejemplo
docs/setup-cuenta-lab.md             cómo se montó la cuenta y el subdominio
docs/notas-sesion.md                 uso interno: cómo conducir la sesión con el equipo
```

## Decisiones de marca que conviene conocer

- **La fuente de cuerpo es Poppins**, no Lato. El brand kit dice Lato porque aplica al manual impreso; todo lo publicado está en Poppins.
- **El azul es `#0B89B0` y el naranja `#F47149`**, los del manual y el campus. Las landings públicas usan un matiz ligeramente distinto (`#098cb6` / `#f8774d`), que es deriva histórica.
- **En texto pequeño, el azul va en `#086A8A`.** El azul de marca sobre blanco no llega al mínimo de contraste por debajo de 18px.
- **Sin sombras.** Las landings antiguas tienen, pero es deuda pendiente, no un ejemplo a seguir.
- **El campus tiene su propio design system.** Para maquetar dentro de la plataforma manda ese documento, no esta skill.

El detalle está en `plugins/charlysway-web/skills/cw-marca/references/webs-reales.md`.
