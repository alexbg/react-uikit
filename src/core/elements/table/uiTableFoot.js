var React = require('react');

var uiTableFoot = React.createClass({
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

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <tfoot className={filledClassName} {...options}>{props.children}</tfoot>
  }
});

module.exports = uiTableFoot;
