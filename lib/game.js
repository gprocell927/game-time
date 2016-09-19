var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');

var themeSong = document.getElementById("theme-song");
var celebration = document.getElementById("celebration");


function Game() {
  this.canvas = canvas;
  this.enemy = new Enemy({});
  this.bluecifer = new Bluecifer (150, 150, 50, 41);
  this.active = true;
}

Game.prototype.repeat = function() {
  this.clearCanvas();
  this.bluecifer(ctx);
  this.blueciferGravity();
  this.newEnemy1();
  this.newEnemy2();
  this.newEnemy3();

}

Game.prototype.clearCanvas = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

Game.prototype.bluecifer = function(ctx) {
  bluecifer.draw(ctx);
}

Game.prototype.blueciferGravity = function() {
  blucifer.gravity();
}

Game.prototype.newEnemy1 = function() {
  enemy.draw(ctx);
  collision(enemy, bluecifer);
  enemy.moveLeftRandom();
}

Game.prototype.newEnemy2 = function() {
  enemy.draw(ctx);
  collision(enemy, bluecifer);
  enemy.moveLeftRandom();
}

Game.prototype.newEnemy3 = function() {
  enemy.draw(ctx);
  collision(enemy, bluecifer);
  enemy.moveLeftRandom();
}

module.exports = Game;
