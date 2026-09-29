# Componentes de Charly's Way

Copia y pega. Todos asumen que ya tienes los tokens de `tokens.css` cargados.

## Etiqueta (eyebrow)

Va encima del titular. **Siempre Poppins Bold mayúsculas, nunca Antonio.**

```html
<p class="etiqueta">Formación interna</p>
```
```css
.etiqueta{display:inline-block;font-weight:700;text-transform:uppercase;letter-spacing:.08em;
  font-size:.8125rem;color:var(--cw-naranja);margin:0 0 12px}
```

## Botones

```html
<a class="cta" href="#">Reservar mi plaza</a>
<a class="cta cta-secundario" href="#">Ver el temario</a>
```
```css
.cta{display:inline-block;background:var(--cw-naranja);color:var(--cw-blanco);font-weight:700;
  text-transform:uppercase;text-decoration:none;padding:15px 30px;border-radius:var(--cw-radio-boton);
  border:none;cursor:pointer;font-size:1rem;transition:background .15s ease}
.cta:hover{background:var(--cw-naranja-hover)}
.cta-secundario{background:var(--cw-blanco);color:var(--cw-oscuro);border:1.5px solid var(--cw-borde)}
.cta-secundario:hover{background:var(--cw-card)}
```

El texto de un CTA empieza por verbo y tutea: "Empieza hoy", "Reserva tu plaza", "Descarga la guía". Nada de "Más información".

## Hero azul

```html
<section class="hero">
  <div class="envoltorio">
    <p class="etiqueta">Etiqueta</p>
    <h1>Titular corto y contundente</h1>
    <p>Una frase de apoyo. Corta.</p>
    <p><a class="cta" href="#">Empezar ahora</a></p>
  </div>
</section>
```
```css
.hero{background:var(--cw-azul) url('https://lp.charlysway.com/brandkit/assets/fotos/BG-03.jpg') center/cover no-repeat;
  color:var(--cw-blanco);padding:var(--cw-seccion) 0}
.hero h1{color:var(--cw-blanco)}
.hero .etiqueta{color:var(--cw-blanco);opacity:.85}
```

## Sección clara

```css
.claro{background:var(--cw-blanco) url('https://lp.charlysway.com/brandkit/assets/fotos/bg-line-01-scaled.jpg') top center/cover no-repeat;
  padding:var(--cw-seccion) 0}
```

## Tarjetas

Sin sombra, siempre borde fino. La rejilla se reordena sola y no deja huecos sueltos.

```html
<div class="rejilla">
  <article class="card">
    <h3>Título</h3>
    <p>Texto de la tarjeta.</p>
  </article>
</div>
```
```css
.rejilla{display:grid;gap:20px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));margin-top:32px}
.card{background:var(--cw-card);border:1.5px solid var(--cw-borde);border-radius:var(--cw-radio-card);padding:28px}
```

**La rejilla tiene que cuadrar exacta.** El `auto-fit` de arriba vale para 2, 3 o 6 tarjetas, pero con 4 te deja tres arriba y una huérfana abajo. Cuando el número no encaje, fija las columnas a mano:

```css
/* 4 tarjetas → 2x2 en desktop, 1 columna en móvil */
.rejilla{display:grid;gap:20px;grid-template-columns:repeat(2,1fr);margin-top:32px}
@media (max-width:640px){.rejilla{grid-template-columns:1fr}}
```

Antes de dar una pieza por buena, cuenta las tarjetas y mira la última fila. Si sobra un hueco, o cambias las columnas o cambias el número de tarjetas.

## Lista con checks

Los checks van en naranja.

```html
<ul class="checks">
  <li>Clases en directo cada semana</li>
  <li>Tutor personal de seguimiento</li>
</ul>
```
```css
.checks{list-style:none;padding:0;margin:24px 0}
.checks li{position:relative;padding-left:32px;margin-bottom:12px}
.checks li::before{content:"✓";position:absolute;left:0;top:0;color:var(--cw-naranja);font-weight:700;font-size:1.125rem}
```

## Cita / testimonio

```html
<blockquote class="cita">«Frase del alumno, tal cual la dijo.»</blockquote>
<p class="cita-autor">María, nivel B2</p>
```
```css
.cita{font-style:italic;color:var(--cw-azul);font-size:1.25rem;border-left:3px solid var(--cw-naranja);
  padding-left:20px;margin:32px 0;max-width:60ch}
.cita-autor{font-weight:700;color:var(--cw-oscuro);margin-top:-16px}
```

No inventes testimonios. Si no tienes uno real, deja el bloque fuera.

## Bloque de pregunta y respuesta

```html
<details class="faq">
  <summary>¿Cuánto dura el programa?</summary>
  <p>Respuesta breve, tuteando.</p>
</details>
```
```css
.faq{border-bottom:1.5px solid var(--cw-borde);padding:20px 0}
.faq summary{font-weight:600;color:var(--cw-oscuro);cursor:pointer;font-size:1.0625rem;list-style:none}
.faq summary::after{content:"+";float:right;color:var(--cw-naranja);font-weight:700}
.faq[open] summary::after{content:"−"}
.faq p{margin:12px 0 0;color:var(--cw-tinta-suave)}
```

## Cabecera y pie

```html
<header class="cabecera">
  <div class="envoltorio">
    <a href="https://charlysway.com"><img src="https://lp.charlysway.com/brandkit/assets/logos/logo-completo-azul.svg" alt="Charly's Way"></a>
    <a class="cta" href="#">Reservar</a>
  </div>
</header>
```
```css
.cabecera{background:var(--cw-blanco);border-bottom:1.5px solid var(--cw-borde)}
.cabecera .envoltorio{display:flex;align-items:center;justify-content:space-between;gap:24px;padding-top:16px;padding-bottom:16px}
.cabecera img{height:44px;width:auto;display:block}
.pie{background:var(--cw-oscuro);color:var(--cw-blanco);padding:40px 0;font-size:.875rem}
.pie a{color:var(--cw-blanco)}
```

## Formularios

Ojo: en el entorno de pruebas **no se recogen datos de personas**. Un formulario ahí es solo maqueta, sin enviar a ningún sitio.

```css
.campo{width:100%;font-family:var(--cw-texto);font-size:1rem;padding:14px 16px;
  border:1.5px solid var(--cw-borde);border-radius:var(--cw-radio-boton);background:var(--cw-blanco)}
.campo:focus{outline:2px solid var(--cw-azul);outline-offset:1px;border-color:var(--cw-azul)}
```

## Lo que nunca lleva una pieza de CW

- Sombras de cualquier tipo.
- Degradados.
- Colores fuera de la paleta.
- Antonio en tamaño pequeño, o para texto que no sea un titular.
- Texto por debajo de 16px en cuerpos.
- El logo recreado con texto, deformado o recoloreado.
- Iconos genéricos de stock mezclados con los de la marca.
