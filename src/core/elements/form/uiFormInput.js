var React = require('react');

var uiFormInput = React.createClass({
  propTypes: {
    row: React.PropTypes.bool,
    state: React.PropTypes.string,
    size: React.PropTypes.string,
    width: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    blank: React.PropTypes.bool,
    help: React.PropTypes.oneOf(['line','block']),
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    control: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {
      className,
      row,
      state,
      size,
      width,
      blank,
      help,
      type,
      icon,
      label,
      control,
      ...options} = props;

    filledClassName.push('');

    if(className){
      filledClassName.push(className);
    }

    if(state){
      filledClassName.push('uk-form-'+state);
    }

    if(size){
      filledClassName.push('uk-form-'+size);
    }

    if(width){
      if(typeof width == 'string'){
        filledClassName.push('uk-form-width-'+width);
      }else{
        filledClassName.push('uk-width-1-'+width);
      }
    }

    if(blank){
      filledClassName.push('uk-form-blank');
    }

    filledClassName = filledClassName.join(' ');

    var controlClassName = [];
    controlClassName.push('uk-form-controls');

    if(type == 'checkbox' || type == 'radio'){
      controlClassName.push('uk-form-controls-text');
    }

    controlClassName = controlClassName.join(' ');

    
    var input;
    var inputElement = <input className={filledClassName} {...options} type={type}></input>
    if(row || control){
      if(control){
        input = (
          <div className='uk-form-row'>
            {label ? <label className='uk-form-label'>{label}</label> : null}
            <div className={controlClassName}>
              {inputElement}
              {type == 'checkbox' || type == 'radio' ? <label>{label}</label> : null}
            </div>
          </div>
        );
      }else{
        input = (
          <div className='uk-form-row'>
            {label ? <label>{label}</label> : null}
            {inputElement}
          </div>
        );
      }
    }else{
      if(label){
        input = (
          <label>{inputElement}{label}</label>
        );
      }else{
        input = {inputElement}
      }
    }
    return input;
  }
});

module.exports = uiFormInput;
