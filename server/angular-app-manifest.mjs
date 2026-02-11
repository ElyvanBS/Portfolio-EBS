
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-EBS/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 21620, hash: 'c24edc18773f4d70f5d1d951fb9646ea6ef50a480e7f486c7e5b59914613bb57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20735, hash: '2ee4582747613eeb9b28dc2277019487ce894cf87cc2ffe6e86b7508b2466b66', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-YBJ6MP3E.css': {size: 1468, hash: 'ySomfmQ7e/M', text: () => import('./assets-chunks/styles-YBJ6MP3E_css.mjs').then(m => m.default)}
  },
};
