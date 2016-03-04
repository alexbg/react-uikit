var React = require('react');

var uiIcon = React.createClass({
  propTypes: {
    icon: React.PropTypes.string.isRequired,
    size: React.PropTypes.string,
    spin: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    justify: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {
      icon: 'github',
      size: 'large',
      spin: false,
      hover: false,
      justify: false
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {icon,size,spin,hover,className,justify, ...options} = props;

    console.log(props);
    filledClassName.push('uk-icon-'+icon);

    // color of button (primary,danger,success,link)
    if(size){
      filledClassName.push('uk-icon-'+size);
    }

    if(spin){
      filledClassName.push('uk-icon-spin');
    }

    if(hover){
      filledClassName.push('uk-icon-hover');
    }

    if(justify){
      filledClassName.push('uk-icon-justify');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    // if is a <button> or <a> tag

    return <i className={filledClassName} {...options}></i>;
  }
});

module.exports = uiIcon;
