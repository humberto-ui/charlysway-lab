# Cómo es Charly's Way en digital, medido sobre las propiedades reales

Análisis del 20 de agosto de 2026 sobre lo que está publicado y en producción. Sirve para dos cosas: saber a qué te tienes que parecer, y saber dónde las fuentes no coinciden entre sí.

## Las propiedades

| Propiedad | Qué es | Con qué está hecha |
|---|---|---|
| `charlysway.com` | Web principal de la marca | WordPress + Bricks |
| `metodo.charlysway.com` | Gemela de la principal, para el método y sus funnels | WordPress + Bricks |
| `charlyswayacademy.com` | Academy: landings de Google Ads y páginas de curso | WordPress + Bricks |
| `lp.charlysway.com` | Funnels nuevos en código (registro, masterclass, replay, gracias) | HTML + Vite + Cloudflare Pages |
| **Campus** | Plataforma de alumnos, tutores, gestores y admin | Next.js 16 + Tailwind 4 + Supabase |

## Lo importante: hay tres estándares, no uno

| | Titulares | Cuerpo | Azul | Naranja |
|---|---|---|---|---|
| Manual y brand kit | Antonio | Lato | `#0B89B0` | `#F47149` |
| Webs públicas | Antonio | Poppins | `#098cb6` | `#f8774d` |
| Campus | **Lato** | Poppins | `#0B89B0` | `#F47149` |

Ninguno está "mal". Son decisiones tomadas en momentos distintos que nunca se reconciliaron.

**Qué manda para lo que tú vas a hacer:** los colores del manual y el campus (dos de tres coinciden, y el campus además los tiene tokenizados y revisados para accesibilidad), con Antonio en titulares y Poppins en el cuerpo, que es el lenguaje de las webs públicas. Si maquetas dentro del campus, manda su `design-system.md` y no esta skill.

## Color, con los números

Contando apariciones en el CSS publicado de las webs:

| | Webs públicas | Manual y campus |
|---|---|---|
| Azul | `#098cb6` (43 usos en las landings, 6 en la principal) | `#0B89B0` |
| Naranja | `#f8774d` (30 usos) | `#F47149` |
| Azul oscuro | `#122d44` en landings, `#094e6c` en la principal | `#243156` |
| Fondo de tarjeta | `#eef4f8` / `#eaeef4` | `#EDF1F8` |

La diferencia entre los dos azules es imperceptible a simple vista. Importa para no seguir ampliando la deriva, no porque se note.

## Accesibilidad: lo que aprendió el campus

El campus hizo el trabajo de contraste y conviene aprovecharlo en vez de repetirlo:

- **`#0B89B0` sobre blanco da 4,03:1**, insuficiente para texto pequeño. Para etiquetas, enlaces y textos por debajo de 18px, el campus usa `#086A8A` (5,8:1). El azul normal se queda para titulares grandes, fondos, bordes, iconos y barras de progreso.
- El gris silenciado subió a `#595959` para cumplir contraste sobre blanco y sobre los grises claros.
- El verde y el ámbar de marca se oscurecieron por la misma razón (`#019264` → `#017A53`).

## Tipografía, con los números

En el CSS de la web principal: **Poppins 39 usos, Antonio 14, Lato 2**. Las landings sirven sus propias `woff2` y solo hay dos familias: Antonio (400-700) y Poppins (300-800). Aparece un `Inter` como fuente por defecto del tema, pero no lo usa ninguna pieza de marca.

El campus cargó Lato para títulos y Poppins para cuerpo, con el body a 18px, y retiró Antonio del sistema por completo.

## Formas: donde el manual y las webs no coinciden

Las landings tienen **119 `box-shadow`** y radios variados (999px para píldoras, 14/16/18px para cajas). El manual prohíbe las sombras y fija radio 8 en botones y 24 en tarjetas.

Manda el manual, porque la regla de "sin sombras, separar con borde fino" es posterior a esas landings. Si abres una landing vieja y ves sombras, es deuda pendiente, no un ejemplo a copiar.

## Patrones que sí se repiten en toda la marca

Esto es el lenguaje visual real de CW, y conviene reproducirlo:

- **Cabecera blanca sólida** con el logo a la izquierda y un CTA a la derecha.
- **Hero sobre el fondo azul texturizado** con la línea del camino, titular gigante en mayúsculas y una frase corta de apoyo.
- **Badge o etiqueta encima del titular**, en Poppins Bold mayúsculas. Nunca en Antonio.
- **Pegatina de Charly recortada anclada al borde inferior**, contra el suelo de la composición.
- **CTAs naranjas rectangulares en mayúsculas**, siempre con verbo.
- **Tarjetas en azul muy claro** con esquinas generosas para bloques de programa o beneficios.
- **La línea discontinua del camino** cruzando fondos claros y oscuros como hilo conductor.
- El campus usa el fondo azul texturizado en las pantallas de acceso, con la tarjeta blanca del formulario encima. El contenido legible siempre va sobre blanco.

## Detalles útiles si tocas algo que ya existe

- Las landings de Google Ads de la academy son páginas duplicadas, cada una con su copia del contenido. No hay plantilla compartida: cambiar una no cambia las demás.
- La academy tiene carga diferida agresiva. El contenido de abajo no aparece en el HTML crudo ni en capturas automáticas, aunque un visitante real sí lo ve.
- La cifra de alumnos que aparece en las landings es la más actualizada. Si encuentras otra distinta en un documento antiguo, pregunta antes de "corregir" nada.
