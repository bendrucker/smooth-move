'use strict'

var extend = require('xtend')
var Bezier = require('bezier-easing')
var scrollPosition = require('scroll-xy')
var raf = require('raf')

var defaults = {
  ease: 'ease',
  duration: 1000
}

module.exports = function smoothScroll (element, options, callback) {
  if (typeof options === 'function') {
    callback = options
    options = {}
  }

  callback = callback || noop

  assertElement(element)
  assertCoordinates(options)

  options = extend(defaults, options)

  var curve = options.ease
  var ease = typeof curve === 'string' ? Bezier.css[curve] : Bezier.apply(null, curve)

  var start = extend(scrollPosition(element), {
    time: +new Date()
  })

  return scroll(start)

  function scroll () {
    var now = +new Date()
    var time = Math.min(1, ((now - start.time) / options.duration))
    var coefficient = ease.get(time)

    element.scrollLeft = coefficient * (options.x - start.x) + start.x
    element.scrollTop = coefficient * (options.y - start.y) + start.y

    if (time < 1) return raf(scroll)
    callback()
  }
}

function assertElement (element) {
  if (!element) {
    throw new TypeError('element is required')
  }
}

function assertCoordinates (options) {
  if (!isNumber(options.x) || !isNumber(options.y)) {
    throw new TypeError('scroll coordinates {x, y} are required')
  }
}

function isNumber (value) {
  return typeof value === 'number'
}

function noop () {}
