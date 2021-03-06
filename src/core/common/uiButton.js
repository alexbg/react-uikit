var React = require('react');

var uiButton = React.createClass({
  propTypes: {
    color: React.PropTypes.string,
    size: React.PropTypes.string,
    toggle: React.PropTypes.bool,
    className: React.PropTypes.string,
    //text: React.PropTypes.string.isRequired,
    disabled: React.PropTypes.bool,
    full: React.PropTypes.bool,
    margin: React.PropTypes.bool,
    modal: React.PropTypes.string,
    centerModal: React.PropTypes.bool,
    bgclose: React.PropTypes.bool,
    offcanvas: React.PropTypes.string
    //link: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {
      color: 'primary',
      size: 'large',
      toggle: false,
      //text: 'button',
      disabled: false,
      full: false,
      margin: true,
      centerModal: false,
      bgclose: false
      //link: false
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {
      color,
      size,
      full,
      toggle,
      className,
      margin,
      modal,
      centerModal,
      bgclose,
      offcanvas,
      ...options
    } = props;


    filledClassName.push('uk-button');

    // color of button (primary,danger,success,link)
    if(color){
      filledClassName.push('uk-button-'+color);
    }

    if(size){
      filledClassName.push('uk-button-'+size);
    }

    if(full){
      filledClassName.push('uk-width-1-1');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    // rest of parameters

    if(toggle){
      options['data-uk-button'] = true;
    }

    if(margin){
      options['data-uk-margin'] = true;
    }

    if(modal){
      options['data-uk-modal'] = "{target: '#"+modal+"', center: "+centerModal+", bgclose: "+bgclose+"}";
    }

    if(offcanvas){
      options['data-uk-offcanvas'] = "{target: '#"+offcanvas+"'}";
    }

    // if is a <button> or <a> tag
    var button;
    if(props.href){
      button = <a className={filledClassName} {...options}>{props.children}</a>
    }else{
      button = <button className={filledClassName} {...options}>{props.children}</button>
    }
    return button;
  }
});

module.exports = uiButton;
