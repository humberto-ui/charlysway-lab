# Assets oficiales de Charly's Way

Todo cuelga de `https://lp.charlysway.com/brandkit/`. Referencia estas URLs directamente, no recrees ningún archivo a mano.

## Logos

| Archivo | Cuándo |
|---|---|
| `assets/logos/logo-completo-azul.svg` | Principal, sobre fondos claros |
| `assets/logos/logo-completo-blanco.svg` | Sobre fondos azules u oscuros |
| `assets/logos/logo-completo-oscuro.svg` | Alternativa sobre claro |
| `assets/logos/logo-cw-azul.svg` | Versión "CW" para espacios pequeños: favicon, avatar |
| `assets/logos/logo-cw-blanco.svg` · `logo-cw-oscuro.svg` | Las mismas variantes de la "CW" |

Cada uno existe también en `.png` con fondo transparente, cambiando la extensión.

Ejemplo de uso:

```html
<img src="https://lp.charlysway.com/brandkit/assets/logos/logo-completo-azul.svg" alt="Charly's Way" style="height:44px;width:auto">
```

Reglas del logo:
- Área de respeto: el ancho del apóstrofe por cada lado. No metas nada dentro.
- Mínimo 100px de ancho en digital.
- Prohibido deformarlo, rotarlo, recolorearlo, ponerle sombra o contorno, o recrearlo con otra tipografía.
- Sobre foto o fondo complejo, versión blanca sobre una zona oscura y despejada.

## Fondos oficiales

| Archivo | Cuándo |
|---|---|
| `assets/fotos/BG-03.jpg` | Fondo azul texturizado con la línea del camino (2000px). Heros y secciones azules |
| `assets/fotos/bg-line-01-scaled.jpg` | Fondo claro tipo papel con la línea del camino (2560px). Secciones claras y documentos |

Si la sección es azul, BG-03. Si es clara, bg-line-01. No hay tercera opción, y no recrees la textura ni la línea con CSS.

```css
.hero  { background: var(--cw-azul) url('https://lp.charlysway.com/brandkit/assets/fotos/BG-03.jpg') center/cover no-repeat; }
.claro { background: #fff url('https://lp.charlysway.com/brandkit/assets/fotos/bg-line-01-scaled.jpg') top center/cover no-repeat; }
```

## Descargas

- `downloads/charlysway-brand-kit.zip` — kit completo: logos, fuentes, pegatinas, fondos y manual
- `downloads/charlysway-tipografias.zip` — TTFs de Antonio, Poppins y Libre Franklin
- `downloads/Manual-de-Marca-CharlysWay.pdf` — manual oficial en PDF
- Kit interactivo: https://lp.charlysway.com/brandkit/
- Manual en Notion: https://nt.charlysway.com/manual-marca-charlys-way

## Logos en SVG inline (solo para la vista previa)

Esto **no es la norma**. Lo normal es referenciar el logo por su URL. Usa el SVG inline solo cuando trabajas dentro de la vista previa del chat, que bloquea las imágenes externas y muestra el logo roto. Al ser texto y no una petición externa, el inline sí se ve.

Cambia el color con el atributo `fill`: `#0B89B0` (azul oficial del logo), `#FFFFFF` (sobre fondo azul u oscuro) o `#243156`. El tamaño, con `width`.

**Logo completo "Charly's Way"** (cabeceras, proporción ~2:1):

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 4136 1964" fill="#0B89B0">
  <path transform="translate(0.0,742) scale(1,-1)" d="M385 752Q448 752 501.5 735.0Q555 718 596.5 687.0Q638 656 664.5 614.0Q691 572 701 522Q706 501 702.5 495.0Q699 489 688 487L513 476Q502 476 499.0 480.5Q496 485 494 495Q486 539 463.5 568.5Q441 598 391 598Q335 598 301.5 548.5Q268 499 268 377Q268 253 298.5 203.5Q329 154 390 154Q440 154 478.5 179.5Q517 205 543 271Q548 283 571 279L696 254Q701 253 707.0 247.0Q713 241 710 221Q707 205 694.0 177.0Q681 149 657.0 116.5Q633 84 595.0 55.5Q557 27 504.5 8.5Q452 -10 383 -10Q276 -10 196.5 40.5Q117 91 73.5 179.5Q30 268 30 381Q30 494 73.5 577.0Q117 660 197.0 706.0Q277 752 385 752Z"/>
  <path transform="translate(737.0,742) scale(1,-1)" d="M68 0Q42 0 42 25V719Q42 742 61 742H221Q239 742 239 721V472Q239 466 242.5 464.5Q246 463 252 468Q281 496 307.5 511.5Q334 527 360.0 533.5Q386 540 412 540Q486 540 527.0 497.5Q568 455 568 375V30Q568 0 538 0H391Q378 0 373.0 5.5Q368 11 368 25V351Q368 374 354.0 386.5Q340 399 316 399Q301 399 287.5 393.5Q274 388 263.0 377.0Q252 366 242 349V29Q242 0 209 0H68Z"/>
  <path transform="translate(1342.0,742) scale(1,-1)" d="M314 42Q287 20 251.5 5.0Q216 -10 169 -10Q94 -10 51.5 32.0Q9 74 9 136Q9 195 46.5 239.0Q84 283 153.0 307.5Q222 332 316 332H323Q327 332 332.5 334.5Q338 337 338 346V363Q338 391 323.5 406.0Q309 421 279 421Q258 421 236.0 411.5Q214 402 201 374Q197 366 192.5 363.5Q188 361 174 363L43 389Q36 391 32.5 396.5Q29 402 36 421Q59 485 124.5 512.5Q190 540 288 540Q381 540 433.0 519.0Q485 498 506.5 461.0Q528 424 528 375V27Q528 12 523.5 6.0Q519 0 505 0H368Q355 0 349.5 10.5Q344 21 342 35L341 42Q338 62 314 42ZM338 224Q338 242 323 242H319Q307 242 287.5 237.5Q268 233 249.0 223.5Q230 214 216.5 199.0Q203 184 203 163Q203 142 218.0 129.0Q233 116 260 116Q280 116 293.5 122.0Q307 128 315 135Q324 143 331.0 151.5Q338 160 338 171V224Z"/>
  <path transform="translate(1915.0,742) scale(1,-1)" d="M67 0Q52 0 46.5 6.0Q41 12 41 25V507Q41 530 60 530H216Q234 530 234 510V454Q234 447 240.0 445.5Q246 444 251 451Q267 476 292.0 496.0Q317 516 345.0 528.0Q373 540 396 540Q433 540 433 520V368Q433 347 413 352Q390 358 365.5 360.5Q341 363 327 363Q311 363 295.5 357.5Q280 352 267.5 342.0Q255 332 248.0 320.0Q241 308 241 295V29Q241 0 208 0H67Z"/>
  <path transform="translate(2369.0,742) scale(1,-1)" d="M242 29Q242 13 234.0 6.5Q226 0 209 0H67Q40 0 40 25L45 719Q45 742 64 742H224Q242 742 242 721Z"/>
  <path transform="translate(2653.0,742) scale(1,-1)" d="M102 -165Q71 -165 58.5 -161.0Q46 -157 46 -143V-41Q46 -35 52.0 -28.5Q58 -22 74 -22H145Q162 -22 176.0 -17.0Q190 -12 198.5 -4.5Q207 3 210.5 12.5Q214 22 210 31L16 501Q12 512 17.5 521.0Q23 530 35 530H204Q213 530 220.0 524.0Q227 518 230 510L315 270Q318 261 323.0 260.5Q328 260 332 270L418 510Q422 518 428.5 524.0Q435 530 444 530H556Q568 530 573.0 521.0Q578 512 573 501L378 31Q352 -32 326.5 -70.5Q301 -109 270.0 -129.5Q239 -150 198.5 -157.5Q158 -165 102 -165Z"/>
  <path transform="translate(3242.0,742) scale(1,-1)" d="M60 411Q51 411 47.0 418.5Q43 426 46 433L88 535Q93 549 91.5 555.5Q90 562 79 564L63 566Q50 568 44.5 572.5Q39 577 39 589V721Q39 742 57 742H204Q221 742 221 724V597Q221 589 217 583L117 432Q110 422 98.5 416.5Q87 411 76 411H60Z"/>
  <path transform="translate(3495.0,742) scale(1,-1)" d="M373 378Q358 395 334.0 409.5Q310 424 273 424Q247 424 228.0 415.0Q209 406 209 389Q209 382 215.5 375.0Q222 368 249 363L355 341Q448 322 485.5 275.0Q523 228 523 170Q523 112 491.0 72.0Q459 32 402.0 11.0Q345 -10 270 -10Q174 -10 110.0 22.0Q46 54 21 99Q16 108 16.0 116.0Q16 124 23 128L110 172Q123 178 129.5 177.0Q136 176 141 170Q153 157 167.5 143.5Q182 130 206.5 121.0Q231 112 271 113Q292 114 309.0 117.5Q326 121 336.0 129.0Q346 137 346 149Q346 159 337.5 167.0Q329 175 300 180L198 198Q122 212 79.0 250.5Q36 289 35 357Q35 409 62.5 450.5Q90 492 144.0 516.0Q198 540 275 540Q357 540 414.5 510.5Q472 481 494 444Q499 437 502.0 428.0Q505 419 494 414L402 370Q393 366 386.0 368.5Q379 371 373 378Z"/>
  <path transform="translate(882.5,1644) scale(1,-1)" d="M1052 742Q1072 742 1079.5 730.5Q1087 719 1082 702L879 25Q870 0 843 0H705Q676 0 669 25L565 377Q562 389 558.0 389.5Q554 390 549 375L446 25Q439 0 410 0H267Q240 0 231 25L27 702Q23 719 30.5 730.5Q38 742 57 742H222Q238 742 244.5 736.5Q251 731 254 721L360 350Q363 339 366.5 338.5Q370 338 372 346L477 721Q479 731 486.0 736.5Q493 742 509 742H649Q665 742 671.5 736.5Q678 731 681 721L791 341Q793 335 797.0 334.0Q801 333 802 339L904 721Q906 731 913.0 736.5Q920 742 936 742H1052Z"/>
  <path transform="translate(1991.5,1644) scale(1,-1)" d="M314 42Q287 20 251.5 5.0Q216 -10 169 -10Q94 -10 51.5 32.0Q9 74 9 136Q9 195 46.5 239.0Q84 283 153.0 307.5Q222 332 316 332H323Q327 332 332.5 334.5Q338 337 338 346V363Q338 391 323.5 406.0Q309 421 279 421Q258 421 236.0 411.5Q214 402 201 374Q197 366 192.5 363.5Q188 361 174 363L43 389Q36 391 32.5 396.5Q29 402 36 421Q59 485 124.5 512.5Q190 540 288 540Q381 540 433.0 519.0Q485 498 506.5 461.0Q528 424 528 375V27Q528 12 523.5 6.0Q519 0 505 0H368Q355 0 349.5 10.5Q344 21 342 35L341 42Q338 62 314 42ZM338 224Q338 242 323 242H319Q307 242 287.5 237.5Q268 233 249.0 223.5Q230 214 216.5 199.0Q203 184 203 163Q203 142 218.0 129.0Q233 116 260 116Q280 116 293.5 122.0Q307 128 315 135Q324 143 331.0 151.5Q338 160 338 171V224Z"/>
  <path transform="translate(2564.5,1644) scale(1,-1)" d="M102 -165Q71 -165 58.5 -161.0Q46 -157 46 -143V-41Q46 -35 52.0 -28.5Q58 -22 74 -22H145Q162 -22 176.0 -17.0Q190 -12 198.5 -4.5Q207 3 210.5 12.5Q214 22 210 31L16 501Q12 512 17.5 521.0Q23 530 35 530H204Q213 530 220.0 524.0Q227 518 230 510L315 270Q318 261 323.0 260.5Q328 260 332 270L418 510Q422 518 428.5 524.0Q435 530 444 530H556Q568 530 573.0 521.0Q578 512 573 501L378 31Q352 -32 326.5 -70.5Q301 -109 270.0 -129.5Q239 -150 198.5 -157.5Q158 -165 102 -165Z"/>
</svg>
```

**Marca "CW"** (favicon, avatar, espacios pequeños, proporción ~1.8:1):

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 1946 1062" fill="#0B89B0">
  <path transform="translate(0.0,742) scale(1,-1)" d="M385 752Q448 752 501.5 735.0Q555 718 596.5 687.0Q638 656 664.5 614.0Q691 572 701 522Q706 501 702.5 495.0Q699 489 688 487L513 476Q502 476 499.0 480.5Q496 485 494 495Q486 539 463.5 568.5Q441 598 391 598Q335 598 301.5 548.5Q268 499 268 377Q268 253 298.5 203.5Q329 154 390 154Q440 154 478.5 179.5Q517 205 543 271Q548 283 571 279L696 254Q701 253 707.0 247.0Q713 241 710 221Q707 205 694.0 177.0Q681 149 657.0 116.5Q633 84 595.0 55.5Q557 27 504.5 8.5Q452 -10 383 -10Q276 -10 196.5 40.5Q117 91 73.5 179.5Q30 268 30 381Q30 494 73.5 577.0Q117 660 197.0 706.0Q277 752 385 752Z"/>
  <path transform="translate(737.0,742) scale(1,-1)" d="M1052 742Q1072 742 1079.5 730.5Q1087 719 1082 702L879 25Q870 0 843 0H705Q676 0 669 25L565 377Q562 389 558.0 389.5Q554 390 549 375L446 25Q439 0 410 0H267Q240 0 231 25L27 702Q23 719 30.5 730.5Q38 742 57 742H222Q238 742 244.5 736.5Q251 731 254 721L360 350Q363 339 366.5 338.5Q370 338 372 346L477 721Q479 731 486.0 736.5Q493 742 509 742H649Q665 742 671.5 736.5Q678 731 681 721L791 341Q793 335 797.0 334.0Q801 333 802 339L904 721Q906 731 913.0 736.5Q920 742 936 742H1052Z"/>
</svg>
```

Dentro de la vista previa, los fondos texturizados tampoco cargan. Ahí usa color plano (`#098cb6` en secciones azules, `#ffffff` o `#eef4f8` en las claras) y devuelve las URLs de los fondos antes de publicar.
