# react-uikit

With react-uikit you can use the css framework uikit with react.

## What can you do?

- button
- icon
- badge
- close

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
