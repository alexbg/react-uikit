var React = require('react');

var uiList = React.createClass({
  propTypes: {
    line: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    space: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,line,striped,space, ...options} = props;

    filledClassName.push('uk-list');

    if(line){
      filledClassName.push('uk-list-line');
    }

    if(striped){
      filledClassName.push('uk-list-striped');
    }

    if(space){
      filledClassName.push('uk-list-space');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <ul className={filledClassName} {...options}>{props.children}</ul>;
  }
});

module.exports = uiList;
