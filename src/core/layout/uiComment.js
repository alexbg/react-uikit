var React = require('react');

var uiComment = React.createClass({
  propTypes: {
    avatar: React.PropTypes.string,
    title: React.PropTypes.string,
    meta: React.PropTypes.string,
    color: React.PropTypes.bool
  },
  getDefaultProps: function(){
    return {

    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,avatar,title,meta,color, ...options} = props;

    filledClassName.push('uk-comment');

    if(color){
      filledClassName.push('uk-comment-primary');
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    /*<header class="uk-comment-header">
        <img class="uk-comment-avatar" src="" alt="">
        <h4 class="uk-comment-title">...</h4>
        <div class="uk-comment-meta">...</div>
    </header>*/

    <div class="uk-comment-body">...</div>
    return (
      <article className={filledClassName} {...options}>
        <header className='uk-comment-header'>
          {avatar ? <img src={avatar} className='uk-comment-avatar'></img> : null}
          {title ? <h4 className='uk-comment-title'>{title}</h4> : null}
          {meta ? <div className='uk-comment-meta'>{meta}</div> : null}
        </header>
        <div className='uk-comment-body'>
          {props.children}
        </div>
      </article>
    )
  }
});

module.exports = uiComment;
