function Bluecifer (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.image = "../IMGS/blue.png";
  this.gravityState = 0.05;
}

Bluecifer.prototype.draw = function(ctx) {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;
};

Bluecifer.prototype.moveUp = function() {
    this.y = this.y - 5;
};

Bluecifer.prototype.gravity = function() {
  this.y += this.gravityState;
};

module.exports = Bluecifer;
