var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//  let image = new Image({ctx: ctx});
//
//  var planeArray = [];
//
// // // function Plane (options) {
// // //  this.x = options.x || 0;
// // //  this.y = options.y || 0;
// // //  this.height = options.height || 10;
// // //  this.width = options.width || 10;
// // //  this.ctx = options.ctx;
// // }
//
// function Plane(x, y, width, height, world) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
//   this.world = world;
// }
//
// function makeNewAirplane () {
//   for (var i = 0; i < 10; i++) {
//
//     var plane = new Plane(10, 10, 20, 20);
//     planeArray.push(plane);
//   }
//   update();
// }
//
// function update () {
//   for (var i = 0; i < planeArray.length; i++) {
//     planeArray[i]
//   }
// };
//


// Image.prototype.draw = function () {
//   this.ctx.fillStyle = "black";
//   this.ctx.fillRect(this.x, this.y, this.width, this.height);
// };
//
//
// var puck = new Image(10, 10, 10, 10);
// puck.draw();

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

var iAmAPlane = $("#plane-image");


function Image (x, y, width, height, id) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.id = id;
}

// var Plane = new Image();
//
// Plane.id =
// var bats = new Plane(100, 200, 300, 400);
// console.log(bats.y);

Image.prototype.createPlane = function () {
  var plane = new Image(10, 10, 20, 20, iAmAPlane);
  window.onload = function () {
    var imageName= iAmAPlane);
    ctx.drawImage(imageName, 10, 10);
  };
};



// Image.prototype.draw = function () {
//
// };
//
//
//
//
//
// // var plane = new Image(100, 100, 100, 100, "IMGS/airplane.png");
// //
// //
// var objects = {
//
//   objectArray: [],
//
//   createObject: function () {
//     var plane = new Image(100, 100, 200, 200, iAmAPlane);
//     this.objectArray.push(image);
//     this.drawImage(image);
//   },
//
//   drawImage: function  () {
//     ctx.drawImage(x, y, width, height, id);
//   },
//
// };
// //
//
// // function Image (x, y, width, height) {
// //   window.onload = function () {
// //     var imageName= document.getElementById("dog-pic");
// //     ctx.drawImage(imageName, x, y, width, height);
// //   };
// // }
// //
// // Image.prototype.moveUpSimple = function () {
// //   this.y = this.y + 20;
// //   return this;
// // };
// //
// // var puck = new Image(0, 60, 80, 40);
// // puck.moveUpSimple();
// //
// // var mike = new Image(200, 200, 100, 100);
// // mike.moveUpSimple();
