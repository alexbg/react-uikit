var React = require('react');
var PaginationLi = require('./uiPaginationLi');

var uiPagination = React.createClass({
  propTypes: {
    names: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];


    var {className,names, ...options} = props;

    filledClassName.push('uk-pagination');

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');


    var childrens;
    var top;
    var bottom;

    if(!names){
      top = <PaginationLi arrow='left' />;
      bottom = <PaginationLi arrow='right' />;
      /*childrens = (
        <PaginationLi arrow='left' />
          // Hay un problema en esta parte
          {props.children}
        <PaginationLi arrow='right' />
      );*/
    }else{
      /*childrens = (
        <PaginationLi name='Previous' >Previous</PaginationLi>
          {props.children}
        <PaginationLi name='Next' >Next</PaginationLi>
      );*/
      top = (
        <PaginationLi name='Previous' >
          <a href='#'>
            <i className='uk-icon-angle-double-left' />
            Previous
          </a>
        </PaginationLi>
      );
      bottom = (
        <PaginationLi name='Next' >
          <a href='#'>
            Next
            <i className='uk-icon-angle-double-right' />
          </a>

        </PaginationLi>
      );
    }

    return (
      <ul className={filledClassName} {...options}>
        {top}
        {props.children}
        {bottom}
      </ul>
    )
  }
});

module.exports = uiPagination;
