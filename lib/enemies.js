var $ = require('jquery');

function Enemy (options) {
  this.options = options || {};
  this.id = Date.now();
  this.x = 500;
  this.y = randomY();
  this.width = this.options.width || 50;
  this.height = this.options.height || 35;
  this.image = this.options.image || "../IMGS/airplane.png";
  this.speed = this.options.speed || 1;
}

function randomSpeed (min, max) {
  min = 0.5;
  max = 3;
  return Math.random() * (max - min) + min;
}

function randomY (min, max) {
  min = 0;
  max = 300;
  return Math.floor(Math.random() * (max - min) + min);
}

var enemyArray = [];

Enemy.prototype.draw = function (ctx) {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return enemyArray.push(this);
};

Enemy.prototype.moveLeftRandom = function () {
    this.x = this.x - randomSpeed();
};

module.exports = Enemy;
