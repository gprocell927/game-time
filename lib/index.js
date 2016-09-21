var $ = require('jquery');

var Enemy = require('./enemies');
var Game = require("./game.js");

var enemy = new Enemy();
var game = new Game();

function hideStartScreen () {
  $('#start-game').css('visibility', 'hidden');
}

function showStartScreen () {
  $('#start-game').css('visibility', 'visible');
}

function hideGameOverScreen () {
  $('#game-over').css('visibility', 'hidden');
}

showStartScreen();

function repeat() {
  if (game.active === true) {
    setTimeout(function() {
    requestAnimationFrame(repeat);
    game.repeat();
  }, 1000 / 100);
  //  game.keepScore();
  }
}

$('#game-over').on("click", function () {
    hideStartScreen ();
    hideGameOverScreen();
    $('#you-win').css('visibility', 'hidden');
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
    $('#you-win').css('visibility', 'hidden');
    $("#final-score-display").text("");
    game.startGame();
    repeat();
    enemy.increaseCounter();
    game.pauseCelebration();
    game.playThemeSong();
});

$('#you-win').on("click", function () {
  hideStartScreen ();
  hideGameOverScreen();
  $('#you-win').css('visibility', 'hidden');
  $("#final-score-display").text("");
  game.startGame();
  repeat();
  enemy.increaseCounter();
  game.pauseCelebration();
  game.playThemeSong();
});

$(document).on("keydown", function (key) {
  if (key.which === 32) {
    if ($('start-game').css('visibility', 'hidden')) {
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
  else if (key.which === 85 && $('start-game').css('visibility', 'visible')) {
    var code = prompt("Enter cheat code");
    game.cheat(code);
  }
});
