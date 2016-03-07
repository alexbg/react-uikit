var React = require('react');
//var Input = require('./uiFormInput');

var uiForm = React.createClass({
  propTypes: {
    margin: React.PropTypes.bool,
    legend: React.PropTypes.string,
    modifiers: React.PropTypes.oneOf(['stacked','horizontal'])
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,legend,margin,modifiers, ...options} = props;

    // ClassName

    filledClassName.push('uk-form');

    /*if(stacked){
      filledClassName.push('uk-form-stacked');
    }

    if(horizontal){
      filledClassName.push('uk-form-horizontal');
    }*/

    if(modifiers){
      filledClassName.push('uk-form-'+modifiers);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    // options

    if(margin){
      options['data-uk-margin'] = true;
    }

    var finalChildrens = [];

    if(modifiers){
      React.Children.map(props.children,function(e,index){
        finalChildrens.push(<e.type {...e.props} control key={'input-'+index}></e.type>);
      });
    }else{
      finalChildrens = props.children;
    }
    

    return (
      <form className={filledClassName} {...options}>
        <fieldset>
          {legend ? <legend>legend</legend> : null}
          {finalChildrens}
        </fieldset>
      </form>
    );
  }
});

module.exports = uiForm;
