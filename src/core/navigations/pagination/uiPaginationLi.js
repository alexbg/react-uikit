var React = require('react');

var uiPagination = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    arrow: React.PropTypes.string,
    name: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,active,disabled,arrow,name, ...options} = props;

    //filledClassName.push('uk-pagination');

    if(active){
      filledClassName.push('uk-active');
    }

    if(disabled){
      filledClassName.push('uk-disabled');
    }

    if(arrow){
      filledClassName.push('uk-icon-angle-double-'+arrow);
    }

    if(name){
      filledClassName.push('uk-pagination-'+name);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <li className={filledClassName} {...options}>{props.children}</li>;
  }
});

module.exports = uiPagination;
