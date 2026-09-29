---
name: cw-marca
description: Construye cualquier pieza web de Charly's Way (landing, página interna, one-pager, email HTML) con la identidad correcta - colores, tipografías Antonio/Poppins, componentes, voz de marca y assets oficiales. Úsala siempre que se maquete algo para Charly's Way, CW, charlysway.com, la academy o el método, o cuando haya que revisar si una pieza ya hecha cumple la marca.
---

# Charly's Way — construir en marca

Esta skill contiene la identidad de Charly's Way tal y como se usa **en digital**. Aplícala entera a cualquier pieza web de la marca. No inventes colores, tipografías ni tono. Ante la duda, la opción más simple y legible.

## Antes de escribir una línea de HTML

1. Copia los tokens de [references/tokens.css](references/tokens.css) tal cual. No transcribas colores a mano.
2. Arranca desde [references/plantilla.html](references/plantilla.html), que ya trae fuentes, tokens y los componentes base.
3. Si necesitas un componente concreto (hero, card, CTA, formulario, testimonio, FAQ), cópialo de [references/componentes.md](references/componentes.md).
4. Antes de entregar, pasa el checklist del final de este archivo.

## Colores

Cuatro colores mandan. Todo lo demás es apoyo.

| Rol | Token | HEX | Uso |
|---|---|---|---|
| Azul Charly | `--cw-azul` | `#0B89B0` | Color principal: titulares, fondos de sección, iconos |
| Naranja Charly | `--cw-naranja` | `#F47149` | CTAs y acentos. **Nunca** para cuerpos de texto |
| Azul oscuro | `--cw-oscuro` | `#243156` | Fondos oscuros y titulares sobre claro |
| Blanco nieve | `--cw-blanco` | `#ffffff` | Texto sobre azul/oscuro, y fondos |

Apoyo: `--cw-azul-hondo #086A8A` (hover de azul), `--cw-naranja-hover #E25D33`, `--cw-tinta #243156` (cuerpos de texto), `--cw-tinta-suave #595959` (texto secundario), `--cw-card #EDF1F8` (fondo de tarjetas), `--cw-borde #E1E7EF`.

Reglas:
- Texto sobre fondo claro → `--cw-tinta`. Texto sobre azul u oscuro → blanco.
- Sin degradados. Sin colores inventados. Sin transparencias que ensucien el color.
- El naranja es el color de "haz clic". Si lo pones en todas partes, deja de funcionar.
- **El azul de marca como texto pequeño no cumple accesibilidad.** `#0B89B0` sobre blanco da 4,03:1, insuficiente para texto por debajo de 18px. Para etiquetas, enlaces y textos pequeños en azul usa `--cw-azul-hondo` (`#086A8A`). El azul normal sigue siendo correcto en titulares grandes, fondos, bordes e iconos.

> **Si maquetas dentro del campus, manda su design system, no esta skill.** El campus (la plataforma de alumnos) tiene su propio `design-system.md` con estos mismos colores ya tokenizados y con toda la familia de derivados. Esta skill es para piezas de marketing y páginas internas.

> **Por qué estos colores y no los de las landings.** Las landings públicas usan `#098cb6` y `#f8774d`, un matiz distinto del mismo azul y el mismo naranja. Es deriva histórica: el manual, el brand kit y el campus coinciden en los valores de arriba, así que son los que manda esta skill. Detalle en [references/webs-reales.md](references/webs-reales.md).

## Tipografías

Dos familias, y cada una tiene su sitio.

```
Antonio  → SOLO titulares. SIEMPRE en MAYÚSCULAS. SIEMPRE grande (mínimo 24px).
Poppins  → todo lo demás: cuerpos, botones, taglines, etiquetas, citas.
```

- Si un titular en Antonio te sale pequeño, no es de la marca. O lo agrandas o lo pasas a Poppins.
- **Taglines, eyebrows y etiquetas van en Poppins Bold mayúsculas, nunca en Antonio.**
- Cuerpos nunca por debajo de 16px.
- Los títulos no llevan numeración delante (nada de un "2.3" naranja).
- El logo lleva su propia tipografía (Libre Franklin Black), pero **nunca recrees el logo escribiéndolo con texto**: usa siempre el archivo oficial.

Jerarquía, aplícala tal cual:

| Nivel | Fuente | Color |
|---|---|---|
| H1 | Antonio 600, MAYÚSCULAS, grande | `--cw-azul` |
| H2 | Antonio 400, MAYÚSCULAS | `--cw-oscuro` |
| Párrafo | Poppins 400 | `--cw-tinta` |
| Tagline / etiqueta | Poppins 700, MAYÚSCULAS | naranja o azul |
| Cita | Poppins 400 itálica | `--cw-azul` |
| CTA | Poppins 700, MAYÚSCULAS | fondo naranja, texto blanco |

> **Sobre la fuente de cuerpo:** el brand kit dice Lato porque aplica al manual impreso. En web siempre Poppins, y es decisión expresa. Las cuatro webs públicas y el campus están construidos en Poppins.

> **Sobre Antonio:** las webs públicas lo usan en titulares y aquí también. El campus, en cambio, lo retiró y usa Lato para los títulos. No es un error de nadie: son dos contextos con decisiones distintas. Para piezas de marketing e internas, Antonio. Para pantallas del campus, su design system.

## Formas y lenguaje visual

- **Botones:** rectangulares, radio 8px, texto Poppins Bold en mayúsculas. Primario naranja con texto blanco; secundario blanco con texto azul oscuro.
- **Cards:** fondo `--cw-card`, radio 24px, borde fino `1.5px solid var(--cw-borde)`.
- **Sin sombras. Regla dura.** Ni `box-shadow` ni `drop-shadow`. La marca separa con color de fondo y bordes finos. Si dudas entre sombra y borde, borde.
- **Fondos:** las secciones azules van sobre `BG-03.jpg` y las claras sobre `bg-line-01-scaled.jpg` (URLs en [references/assets.md](references/assets.md)). No recrees la textura ni la línea del camino a mano, ya vienen en el archivo.
- **La línea discontinua** que cruza los fondos es "el camino de Charly", el motivo gráfico central de la marca. Es decorativa, y va de borde a borde.
- **Las pegatinas de Charly** (fotos silueteadas con borde blanco) se anclan al borde inferior, con el recorte contra el suelo. Nunca flotando cortadas por el aire.
- Estilo general: collage americano, plano y alegre. Sin degradados, sin 3D, sin sombras.

## Voz

Tutea siempre. Cercana, motivadora y desenfadada, como un amigo que te empuja, nunca como una academia formal. Frases cortas. Humor ligero bienvenido. Nada de tecnicismos de gramática salvo que el tema sean ellos.

La promesa de marca: **"Ese amigo con el que sales habiendo aprendido algo."**

Personalidad: cercanos, desenfadados, motivadores, aventureros, divertidos.

En texto corrido se escribe **Charly's Way**. En URLs y emails, **charlysway** todo junto y en minúsculas.

## Cosas que no te puedes inventar

Si la pieza necesita algo de esta lista y no lo tienes, **pregunta**. No lo rellenes a ojo:

- Cifras de alumnos, resultados o precios.
- Nombres y logos de empresas o alumnos (los que están en el manual son reales; no añadas otros).
- Testimonios.
- Fechas de convocatoria, plazos o condiciones de garantía.

## Checklist antes de entregar

1. ¿Solo aparecen los colores de la tabla?
2. ¿Titulares en Antonio, mayúsculas y grandes? ¿El resto en Poppins?
3. ¿El logo es el archivo oficial, sin deformar y con su área de respeto?
4. ¿Los CTAs son naranjas, rectangulares y en mayúsculas?
5. ¿Cero sombras, cero degradados, cero colores inventados?
6. ¿El tono tutea y suena a "ese amigo con el que aprendes inglés"?
7. ¿Se lee bien en móvil? (cuerpos a 16px o más, nada de texto minúsculo)
8. ¿Los datos que aparecen son reales y verificados?

## Un aviso sobre las imágenes

Cuando revises la pieza dentro de la vista previa del chat, las imágenes externas (logos, fondos) **saldrán rotas**. Es una restricción de seguridad de la vista previa, no un fallo de la página ni de las URLs. Al publicarla o abrir el HTML descargado, cargan bien.

Si necesitas que se vean **dentro** de la preview mientras iteras, usa el logo en SVG inline de [references/assets.md](references/assets.md) y color plano en vez de los fondos texturizados. Pero para la pieza final, referencia siempre las URLs oficiales.
