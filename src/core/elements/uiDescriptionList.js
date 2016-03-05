var React = require('react');

// By default is uk-description-list-line
var uiDestriptionList = React.createClass({
  propTypes: {
    horizontal: React.PropTypes.bool,
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,horizontal,line, ...options} = props;

    if(horizontal){
      filledClassName.push('uk-description-list-horizontal');
    }else{
      filledClassName.push('uk-description-list-line');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <dl className={filledClassName} {...options}>{props.children}</dl>;
  }
});

module.exports = uiDestriptionList;
