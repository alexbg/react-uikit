var React = require('react');

var uiButton = React.createClass({
  propTypes: {
    alt: React.PropTypes.bool,
    tag: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      alt: false,
      tag: 'a'
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {alt,tag,className, ...options} = props;

    console.log(props);
    filledClassName.push('uk-close');

    // color of button (primary,danger,success,link)
    if(alt){
      filledClassName.push('uk-close-alt');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    var Close = tag;

    return <Close className={filledClassName} {...options}></Close>
  }
});

module.exports = uiButton;
