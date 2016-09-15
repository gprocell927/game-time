// var greetings = require("./enemies.js");

var $ = require('jquery');
require = ('./bluecifer');

// console.log(greetings.sayHelloInSpanish());

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  plane.draw();
  plane.moveLeftRandom();
  //loop thru array of enemies
}, 10);
