var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var enemies = require("./enemies.js");

var $ = require('jquery');
require = ('./bluecifer');

var plane = enemies.plane;

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw();
  plane.moveLeftRandom();
  //loop thru array of enemies
}, 10);
