var React = require('react');
var Li = require('./uiTabLi');

var uiTab = React.createClass({
  propTypes: {
    flip: React.PropTypes.bool,
    bottom: React.PropTypes.bool,
    justify: React.PropTypes.number,
    center: React.PropTypes.bool,
    vertical: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,flip,bottom,justify,center,vertical, ...options} = props;

    filledClassName.push('uk-tab');

    if(flip){
      filledClassName.push('uk-tab-flip');
    }

    if(bottom){
      filledClassName.push('uk-tab-bottom');
    }
    var finalLi = [];

    if(justify){
      console.log('Es justify');
      filledClassName.push('uk-tab-grid');
      React.Children.map(props.children,function(li,index){

        var className = [];
        className.push(li.props.className);
        className.push('uk-width-1-'+justify);
        className = className.join(' ');
        finalLi.push(<Li className={className} {...li.props}>{li.props.children}</Li>);

      });
    }else{
      finalLi = props.children;
    }

    if(vertical){
      filledClassName.push('uk-tab-'+vertical);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    var tabs;

    if(center){
      tabs = (
        <div className='uk-tab-center'>
          <ul className={filledClassName} {...options} data-uk-tab>{finalLi}</ul>;
        </div>
      );
    }else{
      tabs = <ul className={filledClassName} {...options} data-uk-tab>{finalLi}</ul>;
    }
    console.log(tabs);
    return tabs;
  }
});

module.exports = uiTab;
