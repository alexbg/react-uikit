var React = require('react');

var uiNavParent = React.createClass({
  propTypes: {

  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className, ...options} = props;

    filledClassName.push('uk-parent');

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <li className={filledClassName} {...options}>{props.children}</li>;
  }
});

module.exports = uiNavParent;
