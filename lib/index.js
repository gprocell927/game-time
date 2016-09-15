var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var enemies = require("./enemies.js");

var $ = require('jquery');
var bluecifer = require('./bluecifer');

var plane = enemies.plane;
var enemyArray = enemies.enemyArray;

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw();
  plane.moveLeftRandom();
  
}, 10);
