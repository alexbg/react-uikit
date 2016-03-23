var React = require('react');

var uiTabLi = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,active,disabled, ...options} = props;

    if(active){
      filledClassName.push('uk-active');
    }

    if(disabled){
      filledClassName.push('uk-disabled');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <li className={filledClassName} {...options}>{props.children}</li>;
  }
});

module.exports = uiTabLi;
