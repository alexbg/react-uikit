var React = require('react');

var uiAnimation = React.createClass({
  propTypes: {
    moreDuration: React.PropTypes.bool,
    reverse: React.PropTypes.bool,
    duration: React.PropTypes.number,
    behavior: React.PropTypes.string,
    hover: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {
      animation: 'fade',
      reverse: false,
      moreDuration: false,
      hover: true
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,animation,reverse,moreDuration,behavior,hover, ...options} = props;

    if(hover){
      filledClassName.push('uk-animation-hover');
    }

    if(animation){
      filledClassName.push('uk-animation-'+animation);
    }

    if(reverse){
      filledClassName.push('uk-animation-reverse');
    }

    if(moreDuration){
      filledClassName.push('uk-animation-15');
    }

    if(behavior){
      filledClassName.push('uk-animation-'+behavior);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <div className={filledClassName} {...options}>{props.children}</div>;
  }
});

module.exports = uiAnimation;
