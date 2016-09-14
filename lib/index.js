var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

 let image = new Image({ctx: ctx});

function Plane (options) {
 this.x = options.x || 0;
 this.y = options.y || 0;
 this.height = options.height || 10;
 this.width = options.width || 10;
 this.ctx = options.ctx;
}



Image.prototype.draw = function () {
  this.ctx.fillStyle = "black";
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};


var puck = new Image(10, 10, 10, 10);
puck.draw();

// ctx.clearRect(0, 0, canvas.width, canvas.height);
//   image.draw();


// const Image = require("./enemy-constructors");
//
// function animate () {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   image.draw();
//   image.scoot();
//   requestAnimationFrame(animate);
// }
//


// function Image (x, y, width, height) {
//   window.onload = function () {
//     var imageName= document.getElementById("dog-pic");
//     ctx.drawImage(imageName, x, y, width, height);
//   };
// }
//
// Image.prototype.moveUpSimple = function () {
//   this.y = this.y + 20;
//   return this;
// };
//
// var puck = new Image(0, 50, 40, 40);
// puck.moveUpSimple();
//
// var mike = new Image(200, 200, 100, 100);
// mike.moveUpSimple();
