var React = require('react');

var uiTableHead = React.createClass({
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

    return <thead className={filledClassName} {...options}>{props.children}</thead>
  }
});

module.exports = uiTableHead;
