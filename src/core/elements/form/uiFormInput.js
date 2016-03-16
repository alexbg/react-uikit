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
    help: React.PropTypes.shape({
      type: React.PropTypes.oneOf(['inline','block']),
      text: React.PropTypes.string
    }),
    type: React.PropTypes.string,
    icon: React.PropTypes.string,
    label: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    console.log('yeahhh');
    var props = this.props;
    console.log(props);
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
      help,
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
    console.log(filledClassName);
    var input;
    var inputElement = <input className={filledClassName} {...options} type={type}></input>
    var help;
    if(help){
      if(help.type == 'inline'){
        help = <span className='uk-form-help-inline'>{help.text}</span>
      }else{
        help = <p className='uk-form-help-block'>{help.text}</p>
      }
    }
    if(row || help){
      input = (
        <div className='uk-form-row'>
          {label ? <label className='uk-form-label'>{label}</label> : null}
          {inputElement}
          {help}
        </div>
      );
    }else{
      if(label){
        input = (
          <label>{inputElement}{label}</label>
        );
      }else{
        input = inputElement;
      }
    }
    console.log(input);
    return input;
  }
});

module.exports = uiFormInput;
