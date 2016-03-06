var React = require('react');

var uiTableBody = React.createClass({
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

    return <tbody className={filledClassName} {...options}>{props.children}</tbody>
  }
});

module.exports = uiTableBody;
