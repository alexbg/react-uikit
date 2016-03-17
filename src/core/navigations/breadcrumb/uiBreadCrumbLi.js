var React = require('react');

var uiBreadCrumb = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    //disabled: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,active, ...options} = props;

    //filledClassName.push('');

    if(active){
      filledClassName.push('uk-active');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    var childrens = [];
    React.Children.map(props.children,function(e,index){
      if(typeof e == 'string'){
        console.log('ES UN STRING');
        childrens.push(<span key={'breadcrumb-'+index}>{e}</span>);
      }else{
        childrens.push(e);
      }
    });

    return <li className={filledClassName} {...options}>{childrens}</li>;
  }
});

module.exports = uiBreadCrumb;
