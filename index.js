//var React = require('react');

module.exports = {
  // Common
  button: require('./dist/core/common/uiButton'),
  icon: require('./dist/core/common/uiIcon'),
  badge: require('./dist/core/common/uiBadge'),
  close: require('./dist/core/common/uiClose'),
  alert: require('./dist/core/common/uiAlert'),
  thumbnail: require('./dist/core/common/uiThumbnail'),
  overlay: require('./dist/core/common/uiOverlay'),
  text: require('./dist/core/common/uiText'),
  column: require('./dist/core/common/uiColumn'),
  animation: require('./dist/core/common/uiAnimation'),
  contrast: require('./dist/core/common/uiContrast'),

  // Elements
  list: require('./dist/core/elements/uiList'),
  descriptionList: require('./dist/core/elements/uiDescriptionList'),
  table: require('./dist/core/elements/table/indexTable'),

  form: require('./dist/core/elements/form/indexForm'),

  // Layout
  // has some problems with hover along primary or secondary
  panel: require('./dist/core/layout/uiPanel'),
  block: require('./dist/core/layout/uiBlock'),
  article: require('./dist/core/layout/uiArticle'),
  // It is only the comment, you can not make a comment list by this
  // you can not make a subnav on comment at this moment.
  comment: require('./dist/core/layout/uiComment'),
  cover: require('./dist/core/layout/cover/indexCover'),

  //navigation
  nav: require('./dist/core/navigations/nav/indexNav'),
  breadcrumb: require('./dist/core/navigations/breadcrumb/indexBreadCrumb'),
  //pagination not working at all
  pagination: require('./dist/core/navigations/pagination/indexPagination'),
  tab: require('./dist/core/navigations/tab/indexTab'),
  thumbnav: require('./dist/core/navigations/uiThumbnav'),

  //Javascript
  modal: require('./dist/core/javascript/modal/indexModal'),
  offCanvas: require('./dist/core/javascript/offCanvas')

}
