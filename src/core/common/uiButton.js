var React = require('react');

var uiButton = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    toggle: React.PropTypes.bool,
    className: React.PropTypes.string,
    text: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool,
    full: React.PropTypes.bool,
    margin: React.PropTypes.bool,
    link: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {
      color: 'primary',
      size: 'large',
      toggle: false,
      text: 'button',
      disabled: false,
      full: false,
      margin: true,
      link: false
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {color,size,full,toggle,className,margin,link, ...options} = props;

    console.log(props);
    filledClassName.push('uk-button');

    // color of button (primary,danger,success,link)
    if(color){
      filledClassName.push('uk-button-'+props.color);
    }

    if(size){
      filledClassName.push('uk-button-'+props.size);
    }

    if(full){
      filledClassName.push('uk-width-1-1');
    }

    if(className){
      filledClassName.push(props.className);
    }

    filledClassName = filledClassName.join(' ');

    // rest of parameters

    if(toggle){
      options['data-uk-button'] = true;
    }

    if(margin){
      options['data-uk-margin'] = true;
    }

    // if is a <button> or <a> tag
    var button;
    if(link){
      button = <a className={filledClassName} {...options}>{props.text}</a>
    }else{
      button = <button className={filledClassName} {...options}>{props.text}</button>
    }
    return button;
  }
});

module.exports = uiButton;
