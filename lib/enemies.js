// var $ = require('jquery');

var counter = 0;

function increaseCounter () {
  counter++;
}

increaseCounter();

function Enemy (options) {
  this.options = options || {};
  this.id = Date.now();
  this.x = 800;
  this.y = this.randomY();
  this.width = this.options.width || 50;
  this.height = this.options.height || 35;
  this.image = this.options.image || "../IMGS/airplane.png";
  this.speed = this.options.speed || this.randomSpeed();
}

Enemy.prototype.randomY = function() {
  var min = 0;
  var max = 300;
  return Math.floor(Math.random() * (max - min) + min);
};

Enemy.prototype.randomSpeed = function() {
  increaseCounter();
  var min;
  var max;

  if (counter < 1000) {
    min = 0.5;
    max = 3;
  }
  else {
    min = 2.5;
    max = 5;
  }

  return Math.random() * (max - min) + min;

};

Enemy.prototype.draw = function (ctx) {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};

Enemy.prototype.moveLeftRandom = function () {
    this.x = this.x - this.randomSpeed();
    if (this.x < 0){
      this.x = 500;
      this.y = this.randomY();
    }
};

Enemy.prototype.bottomRight = function () {
  var x = this.x + this.width;
  var y  = this.y + this.height;
  return {x: x, y: y};
};

module.exports = Enemy;
