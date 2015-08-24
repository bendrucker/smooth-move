# smooth-move [![Build Status](https://travis-ci.org/bendrucker/smooth-move.svg?branch=master)](https://travis-ci.org/bendrucker/smooth-move)

> Smoothly scroll a scrollable element


## Install

```
$ npm install --save smooth-move
```


## Usage

```js
var scroll = require('smooth-move')

scroll(element, {
  x: 0,
  y: 20
})
//=> scrolls the element down `y` pixels
```

## API

#### `scroll(element, options)` -> `undefined`

##### element

*Required*  
Type: `HTMLElement`

A scrollable element.

##### options

###### x / y

*Required*  
Type: `number`

Distance to scroll along the x/y axes.

###### ease

Type: `string` / `function`  
Default: `'ease'`

An easing function (see [bezier-easing](https://github.com/gre/bezier-easing))

###### duration

Type: `number`  
Default: `1000`

The duration of the animation

## License

MIT © [Ben Drucker](http://bendrucker.me)
