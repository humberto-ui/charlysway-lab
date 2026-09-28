---
name: charlysway
description: Identidad de marca de Charly's Way para crear o convertir páginas web, landings, one-pagers y documentos internos. Incluye colores, tipografías Antonio y Poppins, componentes, voz de marca y assets oficiales. Úsala siempre que se construya, revise o adapte una pieza para Charly's Way, CW, charlysway.com, la academy, el método o el campus.
---

# Charly's Way — construir en marca

Aplica esta identidad a cualquier pieza web de Charly's Way. No inventes colores, tipografías ni tono. Ante la duda, la opción más simple y legible.

## Antes de escribir una línea de HTML

1. Copia los tokens de `references/tokens.css` tal cual. No transcribas colores a mano.
2. Arranca desde `references/plantilla.html`, que ya trae fuentes, tokens y componentes base.
3. Si necesitas un componente concreto (hero, card, CTA, formulario, testimonio, FAQ), cópialo de `references/componentes.md`.
4. Antes de entregar, pasa el checklist del final.

## El caso más habitual: convertir un HTML que ya existe

Cuando alguien te pase un HTML y te pida que "parezca de Charly's Way":

- Sustituye la paleta por la de la marca.
- Antonio en los titulares, en mayúsculas y grande. Poppins en todo lo demás.
- Cambia botones y tarjetas por los componentes de esta skill.
- Quita todas las sombras y degradados.
- Coloca el logo y los fondos oficiales.
- **Respeta el contenido.** No reescribas los textos salvo que te lo pidan expresamente.

## Colores

| Rol | Token | HEX | Uso |
|---|---|---|---|
| Azul Charly | `--cw-azul` | `#0B89B0` | Color principal: titulares, fondos de sección, iconos |
| Naranja Charly | `--cw-naranja` | `#F47149` | CTAs y acentos. **Nunca** para cuerpos de texto |
| Azul oscuro | `--cw-oscuro` | `#243156` | Texto principal y fondos oscuros |
| Blanco nieve | `--cw-blanco` | `#FFFFFF` | Texto sobre azul u oscuro, y fondos |

Apoyo: `--cw-azul-hondo #086A8A`, `--cw-naranja-hover #E25D33`, `--cw-tinta-suave #595959`, `--cw-card #EDF1F8`, `--cw-borde #E1E7EF`.

Reglas:
- Sin degradados. Sin colores inventados. Sin transparencias que ensucien el color.
- El naranja es el color de "haz clic". Si lo pones en todas partes, deja de funcionar.
- **El azul de marca como texto pequeño no cumple accesibilidad.** `#0B89B0` sobre blanco da 4,03:1. Para etiquetas, enlaces y texto por debajo de 18px usa `#086A8A`. El azul normal vale para titulares grandes, fondos, bordes e iconos.

## Tipografías

```
Antonio  → SOLO titulares. SIEMPRE en MAYÚSCULAS. SIEMPRE grande (mínimo 24px).
Poppins  → todo lo demás: cuerpos, botones, taglines, etiquetas, citas.
```

- Si un titular en Antonio te sale pequeño, no es de la marca. O lo agrandas o lo pasas a Poppins.
- **Taglines, eyebrows y etiquetas van en Poppins Bold mayúsculas, nunca en Antonio.**
- Cuerpos nunca por debajo de 16px.
- Los títulos no llevan numeración delante.
- El logo tiene su propia tipografía, pero **nunca lo recrees escribiéndolo con texto**: usa el archivo oficial.

Jerarquía: H1 Antonio 600 mayúsculas en azul · H2 Antonio 400 mayúsculas en azul oscuro · párrafo Poppins 400 · etiqueta Poppins 700 mayúsculas · cita Poppins itálica en azul · CTA Poppins 700 mayúsculas sobre naranja.

## Formas y lenguaje visual

- **Botones:** rectangulares, radio 8px, mayúsculas. Primario naranja con texto blanco; secundario blanco con borde fino.
- **Cards:** fondo `#EDF1F8`, radio 24px, borde `1.5px solid #E1E7EF`.
- **Sin sombras. Regla dura.** La marca separa con color de fondo y bordes finos. Si dudas entre sombra y borde, borde.
- **Fondos:** secciones azules sobre `BG-03.jpg`, secciones claras sobre `bg-line-01-scaled.jpg`. URLs en `references/assets.md`. No recrees la textura ni la línea del camino a mano.
- **La línea discontinua** de los fondos es "el camino de Charly", el motivo gráfico central de la marca.
- **Las pegatinas de Charly** se anclan al borde inferior, con el recorte contra el suelo. Nunca flotando cortadas.
- Estilo general: collage americano, plano y alegre. Sin degradados, sin 3D, sin sombras.

## Voz

Tutea siempre. Cercana, motivadora y desenfadada, como un amigo que te empuja, nunca como una academia formal. Frases cortas. Humor ligero bienvenido.

La promesa de marca: **"Ese amigo con el que sales habiendo aprendido algo."**

En texto corrido se escribe **Charly's Way**. En URLs y emails, **charlysway** todo junto en minúsculas.

## Cosas que no te puedes inventar

Si la pieza necesita algo de esta lista y no lo tienes, **pregunta**. No lo rellenes a ojo:

- Cifras de alumnos, resultados o precios.
- Nombres y logos de empresas o alumnos.
- Testimonios.
- Fechas de convocatoria, plazos o condiciones de garantía.

## Un aviso sobre las imágenes

En la vista previa del artifact, las imágenes externas (logos, fondos) **salen rotas**. Es una restricción de seguridad de la vista previa, no un fallo de la página ni de las URLs. Al descargar el archivo o publicarlo, cargan bien.

Si hace falta que se vean dentro de la vista previa mientras se itera, usa el logo en SVG inline de `references/assets.md` y color plano en vez de los fondos texturizados. Pero en la pieza final, referencia siempre las URLs oficiales.

## Cómo se forman las direcciones (carpetas = URLs)

En un sitio como este no hay base de datos ni menús que configurar: **la estructura de carpetas es la estructura de direcciones**. Entenderlo es lo que permite hacer varias páginas enlazadas en vez de una suelta.

Si preparas esto y arrastras la carpeta `mi-web`, su contenido pasa a ser la raíz del sitio:

```
mi-web/
  index.html            →  /
  precios/index.html    →  /precios/
  gracias/index.html    →  /gracias/
  imagenes/foto.jpg     →  /imagenes/foto.jpg
  nota.html             →  /nota
```

Reglas prácticas:

- **Una carpeta con un `index.html` dentro = una dirección limpia.** Es la forma normal de crear una página nueva.
- Un archivo suelto también vale: `nota.html` queda en `/nota`, sin la extensión.
- **Enlaza entre páginas con la ruta desde la raíz y barra final:** `<a href="/precios/">`. Así funciona igual en cualquier despliegue.
- Nombres en minúsculas, con guiones, sin acentos ni espacios. `guia-de-estilo`, no `Guía de Estilo`.
- **Cada despliegue reemplaza todo lo anterior.** Si vas a tener varias páginas, súbelas todas juntas en la misma carpeta. No las vayas subiendo de una en una, porque cada subida borra la anterior.
- Si escribes mal una dirección, **no verás un error, verás la portada**. Cuando esperes tu página y te salga la portada, lo primero que hay que revisar es el nombre de la carpeta.

Esto es lo que permite montar un flujo completo para probar: una landing en `/`, su página de gracias en `/gracias/`, y un enlace entre las dos.

## Publicar la pieza

Cuando la persona quiera su enlace, dile que haga esto:

1. Descargar el HTML del artifact y **renombrarlo a `index.html`**.
2. Entrar al panel de Cloudflare de la cuenta del Lab, en **Workers & Pages → cw-lab → Create deployment**.
3. Elegir **Preview** y poner su nombre como rama (así cada persona tiene su URL y no pisa a nadie).
4. Arrastrar el archivo y desplegar.

Su página queda en `https://lab.charlysway.com/<su-nombre>/` (el repartidor del Lab enseña ahí lo que cada persona publica con su nombre). Que nunca elija Production desde el panel: un despliegue sustituye todo lo publicado por lo que se arrastra, y el Lab entero pasaría a ser solo su página. Lo que tenga que quedarse en `lab.charlysway.com` lo publica quien lleva el Lab.

**Lo que nunca se sube al Lab:** datos de personas (leads, alumnos, emails, teléfonos, capturas del CRM), formularios conectados, claves o contraseñas, cifras de facturación ni nada confidencial. El Lab no aparece en Google, pero cualquiera con el enlace entra.

## Checklist antes de entregar

1. ¿Solo aparecen los colores de la tabla?
2. ¿Titulares en Antonio, mayúsculas y grandes? ¿El resto en Poppins?
3. ¿El logo es el archivo oficial, sin deformar y con su área de respeto?
4. ¿Los CTAs son naranjas, rectangulares y en mayúsculas?
5. ¿Cero sombras, cero degradados, cero colores inventados?
6. ¿El tono tutea y suena a "ese amigo con el que aprendes inglés"?
7. ¿Se lee bien en móvil, con cuerpos de 16px o más?
8. ¿Los datos que aparecen son reales y verificados?
