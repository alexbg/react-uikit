# react-uikit

With react-uikit you can use the css framework uikit with react.

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
