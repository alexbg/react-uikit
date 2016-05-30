var React = require('react');

var uiModal = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired

  },
  getDefaultProps: function(){
    return {
      id: '#my-id'
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {id, ...options} = props;

    return (
      <div className='uk-modal' id={id} {...options}>
        {this.props.children}
      </div>
    )
  }
});

module.exports = uiModal;
