var React = require('react');

var uiThumbnav = React.createClass({
  propTypes: {
    grid: React.PropTypes.string

  },

  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {grid, ...options} = props;

    filledClassName.push('uk-thumbnav');

    if(grid){
      filledClassName.push('uk-grid-width-'+grid);
    }

    filledClassName = filledClassName.join(' ');

    return (
      <ul className={filledClassName} {...options}>
        {props.children}
      </ul>
    );
  }
});

module.exports = uiThumbnav;
