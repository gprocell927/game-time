var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require('./enemies');
var Bluecifer = require('./bluecifer');
var Game = require("./game.js");

// var bluecifer = new Bluecifer (150, 150, 50, 41);

$('start-game').css('visibility', 'visible');

var game = new Game();

var themeSong = document.getElementById("theme-song");
var celebration = document.getElementById("celebration");

function repeat() {
  if (game.active === true) {
    setTimeout(function() {
    requestAnimationFrame(repeat);
    game.repeat();
  }, 1000 / 100);
   game.keepScore();
  }
}

$(document).on("click", function () {
  // themeSong.play();
  $('#start-game').css('visibility', 'hidden');
  $('#game-over').css('visibility', 'hidden');
  repeat();
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
    themeSong.pause();
  }
  else if (key.which === 85 && scoreCounter === 0) {
    var code = prompt("Enter cheat code");
    cheat(code);
  }
});

function cheat (code) {
  if (code === "dogs") {
    collisionCanHappen = false;
    alert("Cheat mode activated!");
  }
  else {
    alert("Nope, wrong code!");
  }
}
