var $ = require('jquery');
require = ('./bluecifer');
require = ('./enemies.js');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

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

// var randomY = randomY();

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
var plane = new Enemy(400, randomY(), 50, 35, "../IMGS/airplane.png", 2);
var bird = new Enemy(10, randomY, 60, 100, "../IMGS/blue.png", 4);

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw();
  plane.moveLeftRandom();
  // plane.x--;
  // enemy.x--; //enemy.moveRight(), etc
  //loop thru array of enemies
}, 10);

Enemy.prototype.draw = function () {
  // randomY();
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, randomY(), this.width, this.height);
  return this;
};

Enemy.prototype.moveLeftAssigned = function () {
  this.x = this.x - this.speed;
};

Enemy.prototype.moveLeftRandom = function () {
  this.x = this.x - randomSpeed();
};

function createPlanes () {
  for (var i = 0; i < 3; i++) {
    setTimeout(function() {
      plane.draw();
    }, 10000);
  }
}

createPlanes();
