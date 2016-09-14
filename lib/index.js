var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Image (x, y, width, height) {
  window.onload = function () {
    var imageName= document.getElementById("dog-pic");
    ctx.drawImage(imageName, x, y, width, height);
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
