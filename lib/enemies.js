var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function Enemy (x, y, width, height, image,speed) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = image || "../IMGS/airplane.png";
  this.speed = speed || 1;
}

var randomSpeed = function (max, min) {
  min = 1;
  max = 5;
  return Math.random() * (max - min) + min;
};

var randomY = function (max, min) {
  min = 0;
  max = 300;
  return Math.random() * (max - min) + min;
};

var plane = new Enemy(400, randomY(), 50, 35, "../IMGS/airplane.png", 2);
var bird = new Enemy(10, randomY(), 60, 100); //need to add image and speed of 4
var building = new Enemy(50, 450, 20, 300); //need to add image and speed

var enemyArray = [];

Enemy.prototype.draw = function () {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};

Enemy.prototype.moveLeftAssigned = function () {
  this.x = this.x - this.speed;
};

Enemy.prototype.moveLeftRandom = function () {
    this.x = this.x - randomSpeed();
};

Enemy.prototype.moveUpAssigned = function () {
  this.y = this.y + this.speed;
};

module.exports = {
  enemyArray: enemyArray,
  Enemy: Enemy,
  plane: plane,
  randomY: randomY,
};
