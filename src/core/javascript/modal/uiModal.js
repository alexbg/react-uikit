var React = require('react');

var uiButton = React.createClass({
  propTypes: {
    id: React.PropTypes.string,
    close: React.PropTypes.bool,
    large: React.PropTypes.bool,
    button: React.PropTypes.bool,
    //text: React.PropTypes.string.isRequired,
    lightbox: React.PropTypes.string,
    spinner: React.PropTypes.bool,
    center: React.PropTypes.bool,
    closeOverlay: React.PropTypes.bool
    //link: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {
      id: 'my-id'
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {id, ...options} = props;

    React.Children.map(props.children,function(e,index){
      console.log(e);
    });

    return (
      <div className='uk-modal' id={id}>
        {this.props.children}
      </div>
    )
  }
});

module.exports = uiButton;
