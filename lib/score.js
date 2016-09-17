var $ = require('jquery');
function Score (options) {
  this.options = options || {};
  this.type = "text";
  this.width = this.options.width;
  this.height = this.options.height;
  this.x = this.options.x;
  this.y = this.options.y;
}


module.exports = Score;
