var $ = require('jquery');

var Enemy = require('./enemies');
var Game = require("./game.js");

var enemy = new Enemy();
var game = new Game();

var startGame = $('#start-game');
var gameOver = $('#game-over');
var youWin = $('#you-win');


function hideStartScreen () {
  startGame.css('visibility', 'hidden');
}

function showStartScreen () {
  startGame.css('visibility', 'visible');
}

function hideGameOverScreen () {
  gameOver.css('visibility', 'hidden');
}

function hideYouWinScreen () {
  youWin.css('visibility', 'hidden');
}

showStartScreen();

function repeat() {
  if (game.active === true) {
    setTimeout(function() {
    requestAnimationFrame(repeat);
    game.repeat();
    }, 1000 / 100);
  }
}

gameOver.on("click", function () {
    hideStartScreen ();
    hideGameOverScreen();
    hideYouWinScreen();
    $("#final-score-display").text("");
    game.startGame();
    repeat();
    enemy.increaseCounter();
    game.pauseCelebration();
    game.playThemeSong();
});

$('#start-game').on("click", function () {
    hideStartScreen ();
    hideGameOverScreen();
    hideYouWinScreen();
    $("#final-score-display").text("");
    game.startGame();
    repeat();
    enemy.increaseCounter();
    game.pauseCelebration();
    game.playThemeSong();
});

youWin.on("click", function () {
  hideStartScreen ();
  hideGameOverScreen();
  hideYouWinScreen();
  $("#final-score-display").text("");
  game.startGame();
  repeat();
  enemy.increaseCounter();
  game.pauseCelebration();
  game.playThemeSong();
});

$(document).on("keydown", function (key) {
  if (key.which === 32) {
    if (startGame.css('visibility', 'hidden')) {
      game.bluecifer.moveUp();
      game.detectCeilingCollision();
    }
    else {
      game.resetGame();
    }
  }
  else if (key.which === 13) {
      game.pauseThemeSong();
  }
  else if (key.which === 85) {
    var code = prompt("Enter cheat code");
    game.cheat(code);
  }
});
