
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/tetedecactus/Projects/perso/web/portfolio_gatsby/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/tetedecactus/Projects/perso/web/portfolio_gatsby/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/tetedecactus/Projects/perso/web/portfolio_gatsby/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/home/tetedecactus/Projects/perso/web/portfolio_gatsby/src/pages/projects.js"))
}

