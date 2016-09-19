var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');

var themeSong = document.getElementById("theme-song");
var celebration = document.getElementById("celebration");

var scoreCounter = 0;

function Game() {
  this.canvas = canvas;
  this.enemy = new Enemy({});
  this.bluecifer = new Bluecifer (150, 150, 50, 41);
  this.active = true;
}

Game.prototype.repeat = function() {
  setTimeout(function() {
    this.clearCanvas();
    this.bluecifer(ctx);
    this.blueciferGravity();
    this.newEnemy1();
    this.newEnemy2();
    this.newEnemy3();
    this.detectFloorCollision();
}, 1000 / 100);
    this.keepScore();
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

//ceiling collision
Game.prototype.detectCeilingCollision = function() {
  if (bluecifer.y < 0) {
    bluecifer.y = bluecifer.y + 20;
  }
}

Game.prototype.detectFloorCollision = function() {
  if (bluecifer.y > 350) {
    themeSong.pause();
    this.resetGame();
    this.youAreDead();
    bluecifer.y = 300;
  }
}

Game.prototype.resetGame = function() {
  location.reload();
  $('start-game').css('visibility', 'hidden');
  this.repeat();
}

Game.prototype.keepScore = function() {
  var currentScore = scoreCounter++;
  if (currentScore <= 100){
    $('#game-score').text("000" + currentScore);
  } else if (currentScore <= 1000){
    $('#game-score').text("00" + currentScore);
  } else if (currentScore <= 10000){
    $('#game-score').text("0" + currentScore);
    drawAirport();
  } else {
    $('#game-score').text(currentScore);
  }
};



module.exports = Game;
