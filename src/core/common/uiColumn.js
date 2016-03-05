var React = require('react');

var uiColumn = React.createClass({
  propTypes: {
    split: React.PropTypes.shape({
      default: React.PropTypes.number,
      small: React.PropTypes.number,
      medium: React.PropTypes.number,
      large: React.PropTypes.number,
      xlarge: React.PropTypes.number
    })
  },
  getDefaultProps: function(){
    return {

      split: {default: 3, large: 2}
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,split, ...options} = props;

    if(split){
      Object.keys(split).map(function(key,index){
        if(key == 'default'){
          filledClassName.push('uk-column-1-'+split[key]);
        }else{
          filledClassName.push('uk-column-'+key+'-1-'+split[key]);
        }
      });
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return <p className={filledClassName} {...options}>{props.children}</p>;
  }
});

module.exports = uiColumn;
