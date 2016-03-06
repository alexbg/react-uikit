var React = require('react');

var uiTable = React.createClass({
  propTypes: {
    hover: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    condensed: React.PropTypes.bool,
    responsive: React.PropTypes.bool,
    caption: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      hover: true,
      responsive: true
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,hover,striped,condensed,responsive,caption, ...options} = props;

    filledClassName.push('uk-table');

    if(hover){
      filledClassName.push('uk-table-hover');
    }

    if(striped){
      filledClassName.push('uk-table-striped');
    }

    if(condensed){
      filledClassName.push('uk-table-condensed');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    var table;
    console.log(caption);
    if(responsive){
      table = (
        <div className='uk-overflow-container'>
          <table className={filledClassName} {...options}>
            {caption ? <caption>caption</caption> : null}
            {props.children}
          </table>
        </div>
      );
    }else{
      table = (
        <table className={filledClassName} {...options}>
          {caption ? <caption>caption</caption> : null}
          {props.children}
        </table>
      )
    }

    return table;
  }
});

module.exports = uiTable;
