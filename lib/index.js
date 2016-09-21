var $ = require('jquery');

// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

var Enemy = require('./enemies');
var Game = require("./game.js");

var enemy = new Enemy();
var game = new Game();

$('start-game').css('visibility', 'visible');

function repeat() {
  if (game.active === true) {
    setTimeout(function() {
    requestAnimationFrame(repeat);
    game.repeat();
  }, 1000 / 100);
  //  game.keepScore();
  }
}

$(document).on("click", function () {
    $('#start-game').css('visibility', 'hidden');
    $('#game-over').css('visibility', 'hidden');
    $('#you-win').css('visibility', 'hidden');
    $("#final-score-display").text("");
    game.startGame();
    repeat();
    enemy.increaseCounter();
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
