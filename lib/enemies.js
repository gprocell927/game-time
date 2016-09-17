var $ = require('jquery');

function Enemy (options) {
  this.options = options || {};
  this.id = Date.now();
  this.x = 500;
  this.y = this.randomY();
  this.width = this.options.width || 50;
  this.height = this.options.height || 35;
  this.image = this.options.image || "../IMGS/airplane.png";
  this.speed = this.randomSpeed() || 0.7;
}

Enemy.prototype.randomY = function() {
  var min = 0;
  var max = 300;
  return Math.floor(Math.random() * (max - min) + min);
};

Enemy.prototype.randomSpeed = function() {
  var min = 0.5;
  var max = 1;
  return Math.random() * (max - min) + min;
};

Enemy.prototype.draw = function (ctx) {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
};

Enemy.prototype.moveLeftRandom = function () {
    this.x = this.x - this.randomSpeed();

    if (this.x < 0){
      this.x = 500;
    }
};

module.exports = Enemy;
