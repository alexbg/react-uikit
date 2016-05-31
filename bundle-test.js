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

  /*ReactDOM.render(
    <div>
      <test.button
       color='primary'
       size='large'
       id='weee'
       modal='prueba'
       centerModal>
         I am a button
      </test.button>
      <test.modal.modal id='prueba'>
        <test.modal.dialog caption='Prueba caption' large>
          <test.modal.modalHeader>
            Este es el headerrr weeee
          </test.modal.modalHeader>
            Este es el restoooo
          <test.modal.modalFooter>
            Este es el footer
          </test.modal.modalFooter>
        </test.modal.dialog>
      </test.modal.modal>
      <test.button
       color='primary'
       size='large'
       id='weee'
       onClick={function(){console.log('weeeee')}}>
         I am a weee button
      </test.button>
    </div>,document.getElementById('test')
  );*/

  ReactDOM.render(
    <div>
    <test.button offcanvas='prueba'>Poner offcanvas</test.button>
    <test.offCanvas id='prueba'>
      Funcionando weee el off canvas
    </test.offCanvas>
    </div>,document.getElementById('test')
  );
