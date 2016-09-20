var $ = require('jquery');

var canvas = document.getElementById("canvas");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');

var enemy = new Enemy();
// var game = new Game();
var scoreCounter = 0;
var enemies = [];

var themeSong = document.getElementById("theme-song");

function Game() {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.bluecifer = new Bluecifer (150, 150, 50, 41);
  this.active = true;
  this.enemies = enemies;
}

Game.prototype.repeat = function() {
    var blueciferY = this.bluecifer.y;
    this.clearCanvas();
    this.bluecifer.draw(this.ctx);
    this.bluecifer.gravity();
    this.detectFloorCollision();
    this.createNewEnemies();
    this.drawEnemiesFromArray(blueciferY); //took out this.ctx from parens; may need to put it back in?
    this.keepScore();
};

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.bluecifer = function() {
  this.bluecifer.draw(this.ctx);
};

Game.prototype.blueciferGravity = function() {
  this.bluecifer.gravity();
};

Game.prototype.createNewEnemies = function() {
if (scoreCounter % 100 === 0){
  if (this.enemies.length < 5){
    this.enemies.push(new Enemy());
  }
}
};

Game.prototype.drawEnemiesFromArray = function(blueciferY) {
  var theBigY = blueciferY;
  var blues = {};
  blues.x = 150;
  blues.y = theBigY;
  blues.width = 50;
  blues.height = 41;
  enemies.forEach(function(enemy) {
    enemy.moveLeftRandom();
    enemy.draw(canvas.getContext("2d"));
    enemy.collision(enemy, blues);
  });
};

//ceiling collision
Game.prototype.detectCeilingCollision = function() {
  if (this.bluecifer.y < 0) {
    this.bluecifer.y = this.bluecifer.y + 20;
  }
};

Game.prototype.detectFloorCollision = function() {
  if (this.bluecifer.y > 350) {
    this.gameOver();
    this.pauseThemeSong();
  }
};

Game.prototype.startGame = function() {
  scoreCounter = 0;
  enemy.resetCounter();
  this.bluecifer.y = 100;
  this.active = true;
};

Game.prototype.keepScore = function() {
  var currentScore = scoreCounter++;
  if (currentScore <= 100){
    $('#game-score').text("000" + currentScore);
  } else if (currentScore <= 1000){
    $('#game-score').text("00" + currentScore);
  } else if (currentScore <= 10000){
    $('#game-score').text("0" + currentScore);
    // drawAirport();
  } else {
    $('#game-score').text(currentScore);
  }
};

Game.prototype.gameOver = function() {
  $('#game-over').css('visibility', 'visible');
  enemies.length = 0;
  this.active = false;
};

Game.prototype.playThemeSong = function () {
  themeSong.play();
};

Game.prototype.pauseThemeSong = function () {
  themeSong.pause();
};

module.exports = Game;
