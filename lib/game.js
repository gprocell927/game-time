var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');
// var Index = require('./index.js')

var themeSong = document.getElementById("theme-song");
var celebration = document.getElementById("celebration");

var enemy = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

var scoreCounter = 0;

function Game() {
  this.canvas = canvas;
  this.bluecifer = new Bluecifer (150, 150, 50, 41);
  this.active = true;
}

Game.prototype.repeat = function() {
  debugger
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
  this.collision(enemy, bluecifer);
  enemy.moveLeftRandom();
}

Game.prototype.newEnemy2 = function() {
  enemy2.draw(ctx);
  this.collision(enemy2, bluecifer);
  setTimeout(function() {
    enemy2.moveLeftRandom();
    return enemy2;
  }, 3000);
}

Game.prototype.newEnemy3 = function() {
  enemy3.draw(ctx);
  collision(enemy3, bluecifer);
  setTimeout(function() {
    enemy3.moveLeftRandom();
    return enemy3;
  }, 6000);
}

//airplane collistion
Game.prototype.collision = function(a, b) {
  if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width)) || collisionCanHappen === false) {
  //if there is no collision
  }
  else {
    // themeSong.pause();
    youAreDead();
    $('#game-over').css('visibility', 'visible')
    this.resetGame();
  }
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

Game.prototype.airportCollision = function(a, b) {
  if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))) {
  //if there is no collision
  }
  else {
    // themeSong.pause();
    // celebration.play();
    $("#message-center").text("You win! Your score was " + scoreCounter);
    bluecifer.y = 1000;
    setTimeout(function() {
      resetGame();
    }, 3000);
  }
};

Game.prototype.resetGame = function() {
  location.reload();
  $('start-game').css('visibility', 'hidden');
  $('game-over').css('visibility', 'hidden');
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
}

Game.prototype.youAreDead = function() {
  $('#game-over').css('visibility', 'visible');
  this.stop();
}



module.exports = Game;
