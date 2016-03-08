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

  // Elements
  list: require('./dist/core/elements/uiList'),
  descriptionList: require('./dist/core/elements/uiDescriptionList'),
  table: require('./dist/core/elements/table/indexTable'),
  form: require('./dist/core/elements/form/indexForm'),
  
  // Layout
  panel: require('./dist/core/layout/uiPanel'),
  block: require('./dist/core/layout/uiBlock'),
  article: require('./dist/core/layout/uiArticle')
}
