var $ = require('jquery');

var canvas = document.getElementById("canvas");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');

var enemy = new Enemy();

var themeSong = document.getElementById("theme-song");
var celebration = document.getElementById("celebration");

function Game() {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.bluecifer = new Bluecifer();
  this.active = true;
  this.enemies = [];
  this.collisionCanHappen = true;
  this.scoreCounter = 0;
}

Game.prototype.repeat = function() {
    var blueciferY = this.bluecifer.y;
    this.clearCanvas();
    this.bluecifer.draw(this.ctx);
    this.bluecifer.gravity();
    this.detectFloorCollision();
    this.createNewEnemies();
    this.drawEnemiesFromArray(blueciferY);
    this.detectEnemyCollision();
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
if (this.scoreCounter % 100 === 0){
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
  blues.height = 35;

  this.enemies.forEach(function(enemy) {
    enemy.moveLeftRandom();
    enemy.draw(canvas.getContext("2d"));
  });
};

Game.prototype.detectEnemyCollision = function() {
  var b = this.bluecifer;
  var self = this;
  this.enemies.forEach(function(a) {
    if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width)) || self.collisionCanHappen === false) {
    }
    else {
      self.gameOver();
    }
  });
};

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
  this.scoreCounter = 0;
  enemy.resetCounter();
  this.bluecifer.y = 100;
  this.active = true;
};

Game.prototype.keepScore = function() {
  var currentScore = this.scoreCounter++;
  if (currentScore <= 100){
    $('#game-score').text("000" + currentScore);
  } else if (currentScore <= 1000){
    $('#game-score').text("00" + currentScore);
  } else if (currentScore <= 10000){
    $('#game-score').text("0" + currentScore); //when they beat the game 
    this.enemies.length = 0;
    this.active = false;
    $("#start-game").css('visibility', 'visible');
    $('#you-win').css('visibility', 'visible');
    this.pauseThemeSong();
    this.playCelebration();
  } else {
    $('#game-score').text(currentScore);
  }
};

Game.prototype.gameOver = function() {
  $('#game-over').css('visibility', 'visible');
  this.enemies.length = 0;
  this.active = false;
  this.pauseThemeSong();
  $("#final-score-display").text("Your final score was " + this.scoreCounter);
};

Game.prototype.playThemeSong = function () {
  themeSong.play();
};

Game.prototype.pauseThemeSong = function () {
  themeSong.pause();
};

Game.prototype.playCelebration = function () {
  celebration.play();
};

Game.prototype.pauseCelebration = function () {
  celebration.pause();
};

Game.prototype.cheat = function (code) {
  if (code === "dogs") {
    this.collisionCanHappen = false;
    alert("Cheat mode activated!");
  }
  else {
    alert("Nope, wrong code!");
  }
};

module.exports = Game;
