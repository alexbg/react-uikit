var React = require('react');

var uiModalHeader = React.createClass({
  render: function(){
    return (
      <div className='uk-modal-header'>
        {this.props.children}
      </div>
    )
  }
});

module.exports = uiModalHeader;
