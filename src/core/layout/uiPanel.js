var React = require('react');
var BadgeElement = require('./../common/uiBadge');

var uiPanel = React.createClass({
  propTypes: {
    badge: React.PropTypes.element,
    // Modifier with hover don't work
    modifier: React.PropTypes.string,
    title: React.PropTypes.string,
    hover: React.PropTypes.bool,
    header: React.PropTypes.bool,
    space: React.PropTypes.bool,
    divider: React.PropTypes.bool,
    teaser: React.PropTypes.string,
    box: React.PropTypes.bool,
    icon: React.PropTypes.element
  },
  getDefaultProps: function(){
    return {
      box: true
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];
    //var panelClassName = [];
    var Tag = 'div';

    var {className,modifier,hover,badge,title,header,space,divider,teaser,box,icon, ...options} = props;

    filledClassName.push('uk-panel');

    if(box && !hover){
      filledClassName.push('uk-panel-box');
    }

    if(modifier){
      if(hover){
        filledClassName.push('uk-panel-box-'+modifier+'-hover');
        Tag = 'a';
      }else{
        filledClassName.push('uk-panel-box-'+modifier);
      }
    }

    if(hover){
      if(!modifier){
        Tag = 'a';
        filledClassName.push('uk-panel-hover');
      }
    }

    if(header){
      filledClassName.push('uk-panel-header');
    }

    if(space){
      filledClassName.push('uk-panel-space');
    }

    if(divider){
      filledClassName.push('uk-panel-divider');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    console.log(badge);
    return (
      <Tag className={filledClassName} {...options}>
        {teaser ? <img src={teaser}></img> : null}
        {badge ? <badge.type className='uk-panel-badge' {...badge.props}>{badge.props.children}</badge.type> : null}
        {title ? <div className='uk-panel-title'>{icon}{title}</div> : null}
        {props.children}
      </Tag>
    );
  }
});

module.exports = uiPanel;
