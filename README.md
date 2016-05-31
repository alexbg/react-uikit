# react-uikit

**react-uikit and the documetation is still in development**

With react-uikit you can use the css framework uikit with react.

The main objective of react-uikit is: to use uikit with react writing the less code
possible while using all the feature that uikit has.

**The documentation is [here](http://alexbg.github.io/react-uikit-doc/)**

## What can you do?

### common

- [button](http://getuikit.com/docs/button.html)
- [icon](http://getuikit.com/docs/icon.html)
- [badge](http://getuikit.com/docs/badge.html)
- [close](http://getuikit.com/docs/close.html)
- [column](http://getuikit.com/docs/column.html)
- [overlay](http://getuikit.com/docs/overlay.html)
- [text](http://getuikit.com/docs/text.html)
- [thumbnail](http://getuikit.com/docs/thumbnail.html)
- [animation](http://getuikit.com/docs/animation.html)
- [alert](http://getuikit.com/docs/alert.html)

### elements

- [table](http://getuikit.com/docs/table.html)
- [description list](http://getuikit.com/docs/description-list.html)
- [list](http://getuikit.com/docs/list.html)
- [form](http://getuikit.com/docs/form.html)

### layout

- [panel](http://getuikit.com/docs/panel.html)
- [block](http://getuikit.com/docs/block.html)
- [article](http://getuikit.com/docs/article.html)
- [comment](http://getuikit.com/docs/comment.html)

### navigation

- [breadcrumb](http://getuikit.com/docs/breadcrumb.html)
- [nav](http://getuikit.com/docs/nav.html)
- [pagination](http://getuikit.com/docs/nav.html)
- [tab](http://getuikit.com/docs/tab.html)
- [thumbnav](http://getuikit.com/docs/thumbnav.html)

### javascript
- [modal](http://getuikit.com/docs/modal.html)
- [off-canvas](http://getuikit.com/docs/offcanvas.html)

## How to install?

`npm install reactuikit`

## How to use?

`var reactuikit = require('reactuikit')`

reactuikit will get a object with all the elements(button,icon,...)

For example, we are going to make a button element.

```
var reactuikit = require('reactuikit');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(React.createElement(reactuikit.button,null),document.getElementById('test'));
```
