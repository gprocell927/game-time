var $ = require('jquery');
function Score (options) {
  this.options = options || {};
  this.type = "text";
  this.width = this.options.width;
  this.height = this.options.height;
  this.x = this.options.x;
  this.y = this.options.y;
  this.update = function () {
    var ctx = canvas.getContext("2d");
    ctx.font = this.width + " " + this.height;
    ctx.fillStyle = color;
    ctx.fillText(this.text, this.x, this.y);
  };
}


module.exports = Score;
