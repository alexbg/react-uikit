var React = require('react');

var uiFormInputGroup = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    condensed: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    //var filledClassName = [];
    var controlClass = [];

    var {className,title,condensed,...options} = props;

    controlClass.push('uk-form-controls');

    React.Children.map(props.children,function(e,index){
      console.log('EL TIPO');
      console.log(e.props.type);
      if((e.props.type == 'checkbox' || e.props.type == 'radio') && controlClass.length < 2){
        controlClass.push('uk-form-controls-text');
      }
    });

    if(condensed){
      controlClass.push('uk-form-controls-condensed');
    }

    /*if(className){
      filledClassName.push(className);
    }*/

    //filledClassName = filledClassName.join(' ');
    controlClass = controlClass.join(' ');

    return (
      <div className="uk-form-row">
        <label className='uk-form-label'>{title}</label>
        <div className={controlClass}>
          {props.children}
        </div>
      </div>
    )
  }
});

module.exports = uiFormInputGroup;
