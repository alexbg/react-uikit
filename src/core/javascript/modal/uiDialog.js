var React = require('react');

var uiDialog = React.createClass({
  propTypes: {
    caption: React.PropTypes.string,
    lightbox: React.PropTypes.bool,
    blank: React.PropTypes.bool,
    spinner: React.PropTypes.bool,
    large: React.PropTypes.bool,
    close: React.PropTypes.bool

  },
  getDefaultProps: function(){
    return {
      large: false,
      close: true
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {caption,lightbox,blank,large,spinner, ...options} = props;


    filledClassName.push('uk-modal-dialog');


    if(large){
      filledClassName.push('uk-modal-dialog-large');
    }

    if(lightbox){
      filledClassName.push('uk-modal-dialog-lightbox');
    }

    if(blank){
      filledClassName.push('uk-modal-dialog-blank');
    }

    if(spinner){
      spinner = <div className='uk-modal-spinner'></div>
    }


    filledClassName = filledClassName.join(' ');


    if(caption){
      caption = <div className='uk-modal-caption'>caption</div>
    }

    if(close){
      close = <a className="uk-modal-close uk-close"></a>
    }

    if(large){
      options['data-uk-button'] = true;
    }


    return (
      <div className={filledClassName} {...options}>
        {close}
        {spinner}
        {props.children}
        {caption}
      </div>
    )
  }
});

module.exports = uiDialog;
