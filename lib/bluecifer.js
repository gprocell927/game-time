function Bluecifer(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Bluecifer.prototype.moveRight = function () {
  this.x++;
  return this;
};

Bluecifer.prototype.moveDown = function () {
  this.y--;
  return this;
};

Bluecifer.prototype.moveUp = function () {
  this.y++;
  return this;
};

Bluecifer.prototype.topRight = function () {
  var x = this.x + this.width;
  var y = this.y;
  return {x: x, y: y};
};

Bluecifer.prototype.bottomRight = function () {
  var x = this.x + this.width;
  var y  = this.y + this.height;
  return {x: x, y: y};
};
