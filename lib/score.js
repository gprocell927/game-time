var $ = require('jquery');
function Score (options) {
  this.options = options || {};
  this.type = "text";
  this.width = this.options.width;
  this.height = this.options.height;
  this.x = this.options.x;
  this.y = this.options.y;
  this.color = this.options.color;
  this.update = function () {
    var ctx = canvas.getContext("2d");
      if(this.type == "text") {
    ctx.font = this.width + " " + this.height;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
  } else {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  };
}


module.exports = Score;
