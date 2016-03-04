var React = require('react');
var Close = require('./uiClose');

var uiAlert = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    close: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {
      color: 'primary',
      close: true
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {color,size,close,className, ...options} = props;

    console.log(props);
    filledClassName.push('uk-alert');

    // color of button (primary,danger,success,link)
    if(color){
      filledClassName.push('uk-alert-'+color);
    }

    if(size){
      filledClassName.push('uk-alert-'+size);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');
    //condition ? 'msg' : null
    return (
      <div className={filledClassName} {...options} data-uk-alert>
        {close ? <Close alert></Close> : null}
        {props.children}
      </div>
    );
  }
});

module.exports = uiAlert;
