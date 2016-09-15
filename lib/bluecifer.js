var $ = require('jquery');
var require = ('./bluecifer');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//bluecifer constructor. Bluecifer will inherhit all of this charactartistics unless otherwise stated
function Bluecifer (x, y, width, height, image, gravity) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = image || "../IMGS/blue.png";
  this.gravity = gravity || 30;
}

//creating an instance of bluecifer
var bluecifer = new Bluecifer (150, 150, 50, 41, this.image, this.gravity);


//
setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bluecifer.draw();
}, 10);


//function to draw bluecifer to the page
Bluecifer.prototype.draw = function() {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};

//function to move Bluecifer up by 1
Bluecifer.prototype.moveUp = function() {
    this.y = this.y - 5;
};

Bluecifer.prototype.gravity = function() {
  this.y = this.y++;
};

//move bluecifer up 5 pixels on keydown of up arrow
$(document).on('keydown', function (e) {
  var code = e.keyCode || e.which;
  if (code === 32) {
    bluecifer.moveUp();
  } else {
    return false;
  }
});


module.exports = {
  Bluecifer: Bluecifer,
}
