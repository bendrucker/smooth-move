# smooth-move [![Build Status](https://travis-ci.org/bendrucker/smooth-move.svg?branch=master)](https://travis-ci.org/bendrucker/smooth-move) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/smooth-move.svg)](https://greenkeeper.io/)

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

![Smooth move Ferguson](http://media.tumblr.com/tumblr_lkh26ovh9i1qfy7a6.jpg)

## License

MIT © [Ben Drucker](http://bendrucker.me)
