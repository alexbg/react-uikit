var React = require('react');

var uiThumbnail = React.createClass({
  propTypes: {
    tag: React.PropTypes.oneOf(['img','figure','a']),
    size: React.PropTypes.string,
    caption: React.PropTypes.string,
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
  },
  getDefaultProps: function(){
    return {
      tag: 'img',
      grid: false
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {size,tag,caption,className,src,alt, ...options} = props;

    console.log(props);
    filledClassName.push('uk-thumbnail');

    if(size){
      filledClassName.push('uk-thumbnail-'+size);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    // select tag
    var thumbnail;

    switch (tag){
      case 'figure':
        thumbnail = (
          <figure className={filledClassName} {...options}>
            <img src={src} alt={alt}></img>
            {caption ? <div className='uk-thumbnail-caption'>{caption}</div> : null}
          </figure>
        );
        break;
      case 'a':
        thumbnail = (
          <a className={filledClassName} {...options}>
            <img src={src} alt={alt}></img>
            {caption ? <div className='uk-thumbnail-caption'>{caption}</div> : null}
          </a>
        );
        break;
      default:
        if(!caption){
          thumbnail = <img src={src} alt={alt} className={filledClassName} {...options}></img>
        }else{
          thumbnail = (
            <div className={filledClassName} {...options}>
              <img src={src} alt={alt}></img>
              {caption ? <div className='uk-thumbnail-caption'>{caption}</div> : null}
            </div>
          );
        }
    }

    return thumbnail;
  }
});

module.exports = uiThumbnail;
