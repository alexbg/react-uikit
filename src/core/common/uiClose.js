var React = require('react');

var uiClose = React.createClass({
  propTypes: {
    alt: React.PropTypes.bool,
    alert: React.PropTypes.bool,
    tag: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      alt: false,
      alert: false,
      tag: 'a'
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {alt,alert,tag,className, ...options} = props;

    
    filledClassName.push('uk-close');

    if(alt){
      filledClassName.push('uk-close-alt');
    }

    if(alert){
      filledClassName.push('uk-alert-close');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    var Close = tag;

    return <Close className={filledClassName} {...options}></Close>
  }
});

module.exports = uiClose;
