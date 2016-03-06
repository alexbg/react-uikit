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

  ReactDOM.render(
    <test.table.table id='yeah' caption='Este es el caption' condensed striped>
      <test.table.head>
        <tr>
          <th>Cabecera 1</th>
          <th>Cabecera 2</th>
          <th>Cabecera 3</th>
        </tr>
      </test.table.head>
      <test.table.foot>
        <tr>
          <td>foot 1</td>
          <td>foot 2</td>
          <td>foot 3</td>
        </tr>
      </test.table.foot>
      <test.table.body>
        <tr>
          <td>body 1</td>
          <td>body 2</td>
          <td>body 3</td>
        </tr>
        <tr>
          <td>body 4</td>
          <td>body 5</td>
          <td>body 6</td>
        </tr>
      </test.table.body>
    </test.table.table>,document.getElementById('test')
  );
