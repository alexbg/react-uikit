var React = require('react');
var Panel = require('./../../layout/uiPanel');

var uiNav = React.createClass({
  propTypes: {
    multiple: React.PropTypes.bool,
    icon: React.PropTypes.bool,
    side: React.PropTypes.bool,
    panel: React.PropTypes.bool,
    title: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,icon,side,multiple,panel,title, ...options} = props;

    filledClassName.push('uk-nav');

    if(icon){
      filledClassName.push('uk-nav-parent-icon');
    }

    if(side){
      filledClassName.push('uk-nav-side');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    // data types

    if(multiple){
      options['data-uk-nav'] = '{multiple:true}';
    }else{
      options['data-uk-nav'] = true;
    }

    var nav;

    if(!panel){
      nav = <ul className={filledClassName} {...options} >{props.children}</ul>;
    }else{
      nav = (
        <Panel title={title} box>
          <ul className={filledClassName} {...options} >{props.children}</ul>
        </Panel>
      );
    }

    return nav;
  }
});

module.exports = uiNav;
