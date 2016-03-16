var React = require('react');

var uiNavSub = React.createClass({
  propTypes: {
    first: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,first, ...options} = props;

    if(first){
      filledClassName.push('uk-nav-sub');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <ul className={filledClassName} {...options}>{props.children}</ul>;
  }
});

module.exports = uiNavSub;
