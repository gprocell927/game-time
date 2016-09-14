var $ = require('jquery');

// var constructors = require("./constructors.js");

// function Bird(x, y, width, height, world) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
//   this.world = world;
// }

function Image (x, y, width, height) {
  window.onload = function () {
    var canvas = document.getElementById("canvas");
    var draw = canvas.getContext("2d");
    var imageName= document.getElementById("dog-pic");
    draw.drawImage(imageName, x, y, width, height);
  };
}

Image.prototype.moveUpSimple = function () {
  this.y = this.y + 20;
  return this;
};

var puck = new Image(0, 50, 40, 40);
puck.moveUpSimple();

var mike = new Image(200, 200, 100, 100);
mike.moveUpSimple();
