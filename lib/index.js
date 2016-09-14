var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// const Image = require("./enemy-constructors");
// let image = new Image({ctx: ctx});
//
// function animate () {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   image.draw();
//   image.scoot();
//   requestAnimationFrame(animate);
// }
//
// Image.prototype.draw = function () {
//   this.ctx.fillStyle = "black";
//   this.ctx.fillRect(this.x, this.y, this.width, this.height);
// };


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
