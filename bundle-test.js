var ReactDOM = require('react-dom');
var React = require('react');
var test = require('reactuikit');

//Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. Lorem ipsum dolor sit amet, consetetur sadipscing elit
/*ReactDOM.render(
  <test.descriptionList
    //href='http://www.google.es'
    //src='http://getuikit.com/docs/images/placeholder_600x400.svg'
    //image='http://getuikit.com/docs/images/placeholder_600x400_2.svg'
    horizontal
    >
    <dt>Titulo</dt>
    <dd>Esta es la description</dd>
  </test.descriptionList>,document.getElementById('test'));*/

  /*ReactDOM.render(
    <test.panel
      title='prueba'
      badge={<test.badge color='success'>Yeah</test.badge>}
      teaser='http://getuikit.com/docs/images/placeholder_600x400_2.svg'
      icon={<test.icon />}
      header>
      Este es el panel
    </test.panel>,document.getElementById('test')
  );*/


  ReactDOM.render(
    <test.cover.cover
      background='http://getuikit.com/docs/images/placeholder_600x400.svg'
      height={500}
      responsive>
    </test.cover.cover>,document.getElementById('test')
  );
