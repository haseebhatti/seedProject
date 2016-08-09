'use strict'

function Cell (isAlive) {
  this.isAlive = isAlive
}

Cell.prototype.coordinates = function (arr) {
  this.location = arr
}

Cell.prototype.birth = function () {
  this.isAlive = true
}

Cell.prototype.death = function () {
  this.isAlive = false
}

var grid = []
