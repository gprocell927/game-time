var $ = require('jquery');
require = ('./bluecifer');
require = ('./enemies.js');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var planeId = $("#plane-image");

var enemyArray = [];

function Enemy (x, y, width, height, image,speed) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = image || "../IMGS/airplane.png";
  this.speed = speed || 1;
}

// var enemy = new Enemy(500, 10, 50, 50);
var plane = new Enemy(400, 10, 50, 50, "../IMGS/airplane.png", 2);
var bird = new Enemy(10, 10, 60, 100, "../IMGS/blue.png", 4);

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw();
  plane.moveLeftAssigned();
  // plane.x--;
  // enemy.x--; //enemy.moveRight(), etc
  //loop thru array of enemies
}, 10);

Enemy.prototype.draw = function () {
  var image = new Image();
  image.src = this.image;
  // var imageName= document.getElementById("plane-image");
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};

Enemy.prototype.moveLeftAssigned = function () {
  this.x--;
};
