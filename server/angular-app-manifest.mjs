
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'Portfolio-EBS',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 21380, hash: '29677fd60438c7d9e13ad53d3ae3a84ed201586878d2e0968c3c588aa902703c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20518, hash: 'ac3a532238b19101caf9de2fc0f4bbe5388c8b957ce4fd27b0233f15efe6151a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5L64UJXR.css': {size: 1445, hash: 'HkpVyG/jSEA', text: () => import('./assets-chunks/styles-5L64UJXR_css.mjs').then(m => m.default)}
  },
};
