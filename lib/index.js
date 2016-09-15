var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var enemies = require("./enemies.js");
var bluecifer = require('./bluecifer');

// var plane = enemies.plane;
// var enemyArray = enemies.enemyArray;
// var randomY = enemies.randomY;

// setInterval(function () {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   plane.draw();
//   plane.moveLeftRandom();
//   createMultiplePlanes();
//
//   //if no plane on screen, generate a new plane and move it left
// }, 10);
//
// function createMultiplePlanes () {
//
// }
