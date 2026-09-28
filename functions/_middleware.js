// Repartidor del Lab. Cada persona publica con su nombre (su rama: https://<nombre>.cw-lab.pages.dev) y su página se ve en
// https://lab.charlysway.com/<nombre>/<pagina>/. Lo que existe en el Lab principal se sirve igual que siempre.
// Así nadie pisa a nadie: cada despliegue en su rama solo cambia lo suyo. Explicación completa en docs/repartidor.md.

const HOSTS = new Set(['lab.charlysway.com', 'cw-lab.pages.dev', 'repartidor.cw-lab.pages.dev']);
const NOMBRE = /^[a-z0-9](?:[a-z0-9-]{0,26}[a-z0-9])?$/;
const RESERVADOS = new Set(['main', 'master', 'production', 'preview', 'repartidor', 'www', 'lab', 'cdn-cgi', 'functions']);
const MARCA = 'x-lab-repartidor';
const ATRIBUTOS = ['href', 'src', 'action', 'poster', 'formaction'];
const PASAN = ['accept', 'accept-language', 'user-agent', 'if-none-match', 'if-modified-since', 'range'];

export async function onRequest(ctx) {
  const { request } = ctx;
  const respuesta = await ctx.next();
  if (respuesta.status !== 404) return respuesta;

  const url = new URL(request.url);
  if (!HOSTS.has(url.hostname) || request.headers.has(MARCA)) return respuesta;
  if (request.method !== 'GET' && request.method !== 'HEAD') return respuesta;

  const partes = url.pathname.split('/');
  const nombre = partes[1] || '';
  if (!NOMBRE.test(nombre) || RESERVADOS.has(nombre)) return respuesta;
  if (partes.length === 2) return Response.redirect(`${url.origin}/${nombre}/${url.search}`, 308);

  const destino = new URL(`https://${nombre}.cw-lab.pages.dev/${partes.slice(2).join('/')}${url.search}`);
  const cabeceras = new Headers({ [MARCA]: '1' });
  for (const h of PASAN) {
    const v = request.headers.get(h);
    if (v) cabeceras.set(h, v);
  }

  let r;
  try {
    r = await fetch(destino, { method: request.method, headers: cabeceras, redirect: 'manual' });
  } catch {
    return respuesta;
  }
  if (r.status === 404 || r.status >= 500) return respuesta;

  const prefijo = `/${nombre}`;
  const salida = new Headers(r.headers);
  const ubicacion = salida.get('location');
  if (ubicacion) {
    const l = new URL(ubicacion, destino);
    if (l.hostname === destino.hostname) salida.set('location', `${prefijo}${l.pathname}${l.search}${l.hash}`);
  }
  salida.set('x-robots-tag', 'noindex, nofollow');
  salida.set('cache-control', 'public, max-age=0, must-revalidate');

  const tipo = salida.get('content-type') || '';
  if (request.method === 'HEAD' || !tipo.includes('text/html') || !r.body) {
    return new Response(r.body, { status: r.status, statusText: r.statusText, headers: salida });
  }

  salida.delete('content-length');
  const fijar = (v) => (v && v.startsWith('/') && !v.startsWith('//') ? prefijo + v : v);
  const html = new Response(r.body, { status: r.status, statusText: r.statusText, headers: salida });
  return new HTMLRewriter()
    .on('[href],[src],[action],[poster],[formaction]', {
      element(el) {
        for (const a of ATRIBUTOS) {
          const v = el.getAttribute(a);
          if (v === null) continue;
          const n = fijar(v);
          if (n !== v) el.setAttribute(a, n);
        }
      },
    })
    .on('[srcset]', {
      element(el) {
        const v = el.getAttribute('srcset');
        el.setAttribute('srcset', v.split(',').map((p) => {
          const [u, ...d] = p.trim().split(/\s+/);
          return [fijar(u), ...d].join(' ');
        }).join(', '));
      },
    })
    .transform(html);
}
