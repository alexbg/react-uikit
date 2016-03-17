var React = require('react');

var uiBreadCrumb = React.createClass({
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

    filledClassName.push('uk-breadcrumb');

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <ul className={filledClassName} {...options}>{props.children}</ul>;
  }
});

module.exports = uiBreadCrumb;
