var $ = require('jquery');
var Bluecifer = require('./bluecifer');

var bluecifer = new Bluecifer (150, 150, 50, 41);

function Enemy (options) {
  this.options = options || {};
  this.id = Date.now();
  this.x = 500;
  this.y = this.randomY();
  this.width = this.options.width || 50;
  this.height = this.options.height || 35;
  this.image = this.options.image || "../IMGS/airplane.png";
  this.speed = this.randomSpeed() || 1;
}

Enemy.prototype.randomY = function() {
  var min = 0;
  var max = 300;
  return Math.floor(Math.random() * (max - min) + min);
};

Enemy.prototype.randomSpeed = function() {
  var min = 0.5;
  var max = 3;
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
    }
}; //end of moveLeftRandom

// Enemy.prototype.collision = function () {
//   var e = this.x;
//   var b = bluecifer.x;
//   // if (e === b) {
//   //   alert("game over!");
//   // }
// };

module.exports = Enemy;
