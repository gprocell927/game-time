// var $ = require('jquery');


//bluecifer constructor. Bluecifer will inherhit all of this charactartistics unless otherwise stated
function Bluecifer (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = "../IMGS/blue.png";
  this.gravityState = 0.05;
}

//creating an instance of bluecifer

//clear game area
//run gravity
//update positions on each frame

//

//function to draw bluecifer to the page
Bluecifer.prototype.draw = function(ctx) {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};

// bluecifer.draw();

//function to move Bluecifer up by 1
Bluecifer.prototype.moveUp = function() {
    this.y = this.y - 5;
};

Bluecifer.prototype.gravity = function() {
  this.y += this.gravityState;
};


//move bluecifer up 5 pixels on keydown of up arrow


// setInterval(function () {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   bluecifer.draw();
//   console.log(bluecifer);
//   bluecifer.gravity();
// }, 10); //end of setInterval function

module.exports = Bluecifer;
