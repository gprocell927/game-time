var $ = require('jquery');

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
  else if (counter < 2000){
    min = 1.5;
    max = 3;
    $('#game-score').css("color", "green");
  }
  else if (counter < 3000){
    min = 2.5;
    max = 4;
    $('#game-score').css("color", "rgb(153, 152, 25)");
}
  else if (counter < 4000){
    min = 3.5;
    max = 5;
    $('#game-score').css("color", "red");
}
    else if (counter < 5000){
    min = 4.5;
    max = 6;

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
