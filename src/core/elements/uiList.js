var React = require('react');

var uiButton = React.createClass({
  propTypes: {
    modifier: React.PropTypes.oneOf(['line','striped','space'])
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,modifier,...options} = props;

    filledClassName.push('uk-list');

    if(modifier){
      filledClassName.push('uk-list-'+modifier);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <ul className={filledClassName} {...options}>{props.children}</ul>;
  }
});

module.exports = uiButton;
