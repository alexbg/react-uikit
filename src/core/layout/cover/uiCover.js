var React = require('react');

var uiCover = React.createClass({
  propTypes: {
    background: React.PropTypes.string,
    responsive: React.PropTypes.bool,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    video: React.PropTypes.string,
  },

  render: function(){
    var props = this.props;

    var filledClassName = [];

    var img;
    var vid;
    var ifr;
    var style;

    var {className,background,responsive,width,height,video,iframe, ...options} = props;

    if(className){
      filledClassName.push(className);
    }

    if(!background || (background && responsive)){
      filledClassName.push('uk-cover');
    }

    if(width){
      width = width+'px';
    }

    if(height){
      height = height+'px';
    }



    if(background){

      if(responsive){
        filledClassName.push('uk-position-relative');
        img = <img className='uk-invisible' src={background} width={width} height={height}></img>
      }else{
        filledClassName.push('uk-cover-background');
        style = {backgroundImage: "url("+background+")", height: height, width: width}
      }
    }

    if(video){
      if(responsive){
        var videoClassName = 'uk-cover-object uk-position-absolute';
        filledClassName.push('uk-position-relative');
      }else{
        var videoClassName = 'uk-cover-object';
      }
      vid = (
        <video className={videoClassName} width={width} height={height} {...options}>
          <source src={video}>
          </source>
        </video>
      )
    }

    if(iframe){
      ifr = (
        <iframe data-uk-cover src={iframe} width={width} height={height} frameborder="0" allowfullscreen></iframe>
      )
    }

    filledClassName = filledClassName.join(' ');

    return (
      <div className={filledClassName} {...options} style={style}>
        {img}
        {vid}
        {ifr}
        {props.children}
      </div>
    )
  }
});

module.exports = uiCover;
