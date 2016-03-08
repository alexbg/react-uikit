var React = require('react');

var uiBlock = React.createClass({
  propTypes: {
    modifier: React.PropTypes.oneOf(['default','muted','primary','secondary']),
    large: React.PropTypes.bool,
    padding: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.bool
    ]),
    contrast: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {
      padding: false,
      contrast: false,
      
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,modifier,large,padding,contrast, ...options} = props;

    filledClassName.push('uk-block');

    if(modifier){
      filledClassName.push('uk-block-'+modifier);
    }

    if(large){
      filledClassName.push('uk-block-large');
    }

    if(padding){
      if(typeof padding == 'string'){
        filledClassName.push('uk-padding-'+padding+'-remove');
      }else{
        filledClassName.push('uk-padding-remove');
      }
    }

    if(contrast){
      filledClassName.push('uk-contrast');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return (
      <div className={filledClassName} {...options}>
        {props.children}
      </div>
    )
  }
});

module.exports = uiBlock;
