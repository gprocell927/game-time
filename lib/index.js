var $ = require('jquery');

// var constructors = require("./constructors.js");

function Bird(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

// window.onload = function () {
//   var canvas = document.getElementById("canvas");
//   var draw = canvas.getContext("2d");
//   var imageName= document.getElementById("dog-pic");
//   draw.drawImage(imageName, 10, 10, 20, 20);
// };

function Image (x, y, width, height) {
  window.onload = function () {
    var canvas = document.getElementById("canvas");
    var draw = canvas.getContext("2d");
    var imageName= document.getElementById("dog-pic");
    draw.drawImage(imageName, x, y, width, height);
  };
}

var dogs = new Image(10, 10, 20, 20);
