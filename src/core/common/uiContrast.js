var React = require('react');

var uiContrast = React.createClass({
  propTypes: {

  },

  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className, ...options} = props;

    filledClassName.push('uk-contrast');

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <div className={filledClassName} {...options}>{props.children}</div>;
  }
});

module.exports = uiContrast;
