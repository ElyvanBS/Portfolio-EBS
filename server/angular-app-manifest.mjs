
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-EBS/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 21620, hash: 'b152c1a0b1e5053e98f8c7be6f60704bbc07443769a4d7a7b460c9dfc55af228', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20735, hash: 'b9f5f0a4e1e74600a8bc6f2cb12e8c45150a1413dbcdca8f32a7557684198d7f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YBJ6MP3E.css': {size: 1468, hash: 'ySomfmQ7e/M', text: () => import('./assets-chunks/styles-YBJ6MP3E_css.mjs').then(m => m.default)}
  },
};
