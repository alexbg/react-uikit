var ReactDOM = require('react-dom');
var React = require('react');
var test = require('reactuikit');


ReactDOM.render(
  <test.text
    //href='http://www.google.es'
    //src='http://getuikit.com/docs/images/placeholder_600x400.svg'
    //image='http://getuikit.com/docs/images/placeholder_600x400_2.svg'
    align='center'
    wrap='truncate'
    >
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit
  </test.text>,document.getElementById('test'));
