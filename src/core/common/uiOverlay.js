var React = require('react');

var uiOverlay = React.createClass({
  propTypes: {
    hover: React.PropTypes.bool,
    src: React.PropTypes.string,
    alt: React.PropTypes.string,
    background: React.PropTypes.bool,
    position: React.PropTypes.oneOf(['top','left','right','bottom','cover']),
    icon: React.PropTypes.bool,
    image: React.PropTypes.string,
    transition: React.PropTypes.oneOf([
      'slide-top',
      'slide-left',
      'slide-right',
      'slide-bottom',
      'fade',
      'scale',
      'spin',
      'grayscale'
    ]),
    flex: React.PropTypes.string,
    href: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      hover: false
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];
    var figureClassName = [];

    var {
      className,
      hover,
      src,
      alt,
      background,
      position,
      icon,
      image,
      transition,
      flex,
      href,
      ...options} = props;

    //filledClassName
    filledClassName.push('uk-overlay-panel');

    if(background){
      filledClassName.push('uk-overlay-background');
    }

    if(position){
      filledClassName.push('uk-overlay-'+position);
    }

    if(transition){
      filledClassName.push('uk-overlay-'+transition);
    }

    if(icon){
      filledClassName.push('uk-overlay-icon');
    }

    if(image){
      filledClassName.push('uk-overlay-image');
    }

    if(flex){
      filledClassName.push('uk-flex',flex);
    }

    if(className){
      filledClassName.push(className);
    }
    //figureClassName

    figureClassName.push('uk-overlay');

    if(hover){
      figureClassName.push('uk-overlay-hover');
    }

    filledClassName = filledClassName.join(' ');
    figureClassName = figureClassName.join(' ');

    // The figcaption what will be render
    var finalFigcaption;

    // The temp figcaption
    var figcaption;

    // if overlay is neither a image nor link
    figcaption = <figcaption className={!flex ? filledClassName:null}>{props.children}</figcaption>
    // if overlay is a image
    if(image){
      figcaption = <img className={!flex ? filledClassName:null} src={image}></img>
    }

    // if overlay has a link
    var link;
    if(href){
      link = <a className='uk-position-cover' href={href}></a>
    }

    // if is using flex
    if(flex){
      finalFigcaption = (
        <figcaption className={filledClassName}>
          {figcaption}
          {link}
        </figcaption>
      );
    }else{
      finalFigcaption = figcaption;
    }

    // if flex is false, insert the link option
    return (
      <figure className={figureClassName} {...options}>
        <img src={src} alt={alt}></img>
        {finalFigcaption}
        {!flex ? link:null}
      </figure>
    );
  }
});

module.exports = uiOverlay;
