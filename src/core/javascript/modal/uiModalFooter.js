var React = require('react');

var uiModalFooter = React.createClass({
  render: function(){
    return (
      <div className='uk-modal-footer'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = uiModalFooter;
