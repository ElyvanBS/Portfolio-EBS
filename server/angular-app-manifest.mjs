
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio-EBS/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 21382, hash: '6ffbab9450aa8c2c193eeec7b52f30f7a06456a92c74b36406fa093a959a0f46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20520, hash: 'e56d786ea9715af682f9f6e1852f1d7763b2ab0314cc33d5943427a727472e1a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5L64UJXR.css': {size: 1445, hash: 'HkpVyG/jSEA', text: () => import('./assets-chunks/styles-5L64UJXR_css.mjs').then(m => m.default)}
  },
};
