var React = require('react');

var uiText = React.createClass({
  propTypes: {
    styles: React.PropTypes.array,
    size: React.PropTypes.oneOf(['small','large']),
    align: React.PropTypes.string,
    wrap: React.PropTypes.oneOf(['truncate','break','nowrap']),
    tag: React.PropTypes.string
  },
  getDefaultProps: function(){
    return {
      styles: ['primary','bold']
    }
  },
  render: function(){
    var props = this.props;

    var filledClassName = [];

    var {className,styles,size,align,wrap,tag, ...options} = props;

    console.log(props);
    //filledClassName.push('uk-button');

    if(styles){
      styles.map(function(value,index){
        filledClassName.push('uk-text-'+value);
      });
    }

    if(align){
      filledClassName.push('uk-text-'+align);
    }

    if(size){
      filledClassName.push('uk-text-'+size);
    }

    if(wrap){
      filledClassName.push('uk-text-'+wrap);
    }

    if(className){
      filledClassName.push(className);
    }

    filledClassName = filledClassName.join(' ');

    var TextTag = 'span';
    if(tag){
      TextTag = tag;
    }

    return <TextTag className={filledClassName}>{props.children}</TextTag>;
  }
});

module.exports = uiText;
