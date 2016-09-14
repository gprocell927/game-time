var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var planeId = $("#plane-image");

var enemyArray = [];

function Enemy (x, y, width, height, image) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = image || "../IMGS/airplane.png";
}

var enemy = new Enemy(10, 10, 50, 50);
var bird = new Enemy(20, 20, 60, 100, "../IMGS/cloud.png");

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  enemy.draw();
  enemy.x++; //enemy.moveRight(), etc
  bird.draw();
  bird.y--;
  //loop thru array of enemies
}, 10);

Enemy.prototype.draw = function () {
  var image = new Image();
  image.src = this.image;
  // var imageName= document.getElementById("plane-image");
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};




// window.onload = function () {
//   var imageName= document.getElementById("plane-image");
//   ctx.drawImage(imageName, 200, 200, 100, 100);
// };
