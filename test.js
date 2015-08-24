'use strict'

var test = require('tape')
var scroll = require('./')

test(function (t) {
  t.plan(6)

  var element = {
    scrollLeft: 0,
    scrollTop: 0
  }

  scroll(element, {
    x: 100,
    y: 200
  })

  setTimeout(function () {
    t.ok(element.scrollLeft < 100)
    t.ok(element.scrollLeft > 0)

    t.ok(element.scrollTop < 200)
    t.ok(element.scrollTop > 0)
  }, 500)

  setTimeout(function () {
    t.equal(element.scrollLeft, 100)
    t.equal(element.scrollTop, 200)
  }, 1010)
})
