var React = require('react');

var uiOffCanvas = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    flip: React.PropTypes.bool

  },
  getDefaultProps: function(){
    return {
      id: '#my-id',
      flip: false
    }
  },

  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {id,flip, ...options} = props;

    filledClassName.push('uk-offcanvas-bar');

    if(flip){
      filledClassName.push('uk-offcanvas-bar-flip');
    }

    filledClassName = filledClassName.join(' ');

    return (
      <div id={id} className="uk-offcanvas">
          <div className={filledClassName} {...options}>
            {props.children}
          </div>
      </div>
    );
  }
});

module.exports = uiOffCanvas;
