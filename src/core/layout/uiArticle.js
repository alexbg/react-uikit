var React = require('react');

var uiArticle = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    meta: React.PropTypes.string,
    lead: React.PropTypes.string,
    divider: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,title,meta,lead,divider, ...options} = props;

    filledClassName.push('uk-article');


    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    return (
      <article className={filledClassName} {...options}>
        {title ? <h1 className='uk-article-title'>{title}</h1> : null}
        {meta ? <div className='uk-article-meta'>{meta}</div> : null}
        {lead ? <div className='uk-article-lead'>{lead}</div> : null}
        {props.children}
        {divider ? <hr className='uk-article-divider'></hr> : null}
      </article>
    )
  }
});

module.exports = uiArticle;
