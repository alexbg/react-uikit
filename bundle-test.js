var ReactDOM = require('react-dom');
var React = require('react');
var test = require('reactuikit');

ReactDOM.render(
  <test.overlay
    hover
    //href='http://www.google.es'
    src='http://getuikit.com/docs/images/placeholder_600x400.svg'
    background
    icon
    //image='http://getuikit.com/docs/images/placeholder_600x400_2.svg'
    flex='uk-flex-center uk-flex-middle'
    >
    Este es el texto
  </test.overlay>,document.getElementById('test'));
