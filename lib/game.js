var $ = require('jquery');

var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');

// var themeSong = document.getElementById("theme-song");
// var celebration = document.getElementById("celebration");

var game = new Game();
var scoreCounter = 0;
var enemies = [];

function Game() {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.bluecifer = new Bluecifer (150, 150, 50, 41);
  this.active = true;
  this.enemies = enemies;
}

Game.prototype.repeat = function() {
    this.clearCanvas();
    this.bluecifer.draw(this.ctx);
    this.bluecifer.gravity();
    this.detectFloorCollision();
    this.createNewEnemies();
    this.drawEnemiesFromArray(this.ctx);
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

Game.prototype.drawEnemiesFromArray = function() {
  enemies.forEach(function(enemy) {
    enemy.moveLeftRandom();
    enemy.draw(canvas.getContext("2d"));
    enemy.collision(enemy, game.bluecifer);
  });
};


//collision functions below. Refactor these late to be in their own file
//airplane collistion
// game.prototype.collision = function(a, b) {
//   if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))) {
//   //if there is no collision
//   }
//   else {
//     console.log('you are dead');
//     // themeSong.pause();
//     $('#game-over').css('visibility', 'visible');
//     this.youAreDead();
//     this.resetGame();
//   }
// };

//ceiling collision
Game.prototype.detectCeilingCollision = function() {
  if (this.bluecifer.y < 0) {
    this.bluecifer.y = this.bluecifer.y + 20;
  }
};

Game.prototype.detectFloorCollision = function() {
  if (this.bluecifer.y > 350) {
    // console.log('game over!')
    // themeSong.pause();
    this.youAreDead();
  }
};

Game.prototype.airportCollision = function(a, b) {
  if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))) {
  //if there is no collision
  }
  else {
    // themeSong.pause();
    // celebration.play();
    $("#message-center").text("You win! Your score was " + scoreCounter);
    this.bluecifer.y = 1000;
    setTimeout(function() {
      this.resetGame();
    }, 3000);
  }
};

Game.prototype.resetGame = function() {
  $('start-game').css('visibility', 'hidden');
  $('game-over').css('visibility', 'hidden');
  this.active = true;
  this.bluecifer.y = 100;
  this.scoreCounter = 0;
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

Game.prototype.youAreDead = function() {
  $('#game-over').css('visibility', 'visible');
  this.active = false;
};

module.exports = Game;
