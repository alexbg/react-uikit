var React = require('react');

var uiBadge = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    notification: React.PropTypes.bool,
    tag: React.PropTypes.oneOf(['div', 'span'])
  },
  getDefaultProps: function(){
    return {
      notification: false,
      tag: 'div'
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {color,notification,tag,className, ...options} = props;

    
    filledClassName.push('uk-badge');

    // color of button (primary,danger,success,link)
    if(color){
      filledClassName.push('uk-badge-'+color);
    }

    if(notification){
      filledClassName.push('uk-badge-notification');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    var Badge = tag;

    return <Badge className={filledClassName} {...options}>{props.children}</Badge>
  }
});

module.exports = uiBadge;
