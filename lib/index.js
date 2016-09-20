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


// //cheat code  activation
// var collisionCanHappen = true;

// function drawAirport () {
//   var image = new Image();
//   image.src = "IMGS/dia-photo.jpg";
//   var airport = {};
//   airport.x = 150;
//   airport.y = 340;
//   airport.width = 30;
//   airport.height = 30;
//   ctx.drawImage(image, airport.x, airport.y, airport.width, airport.height);
//   airportCollision(airport, bluecifer);
//   return this;
// }

// function newEnemy () {
//   enemy.draw(ctx);
//   collision(enemy, bluecifer);
//   enemy.moveLeftRandom();
// }
//
// function newEnemy2 () {
//   enemy2.draw(ctx);
//   collision(enemy2, bluecifer);
//   setTimeout(function() {
//     enemy2.moveLeftRandom();
//     return enemy2;
//   }, 3000);
// }
//
// function newEnemy3 () {
//   enemy3.draw(ctx);
//   collision(enemy3, bluecifer);
//   setTimeout(function() {
//     enemy3.moveLeftRandom();
//     return enemy3;
//   }, 6000);
// }

// function collision(a, b) {
//   if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width)) || collisionCanHappen === false) {
//   //if there is no collision
//   }
//   else {
//     themeSong.pause();
//     youAreDead();
//     $('#start-game').css('visibility', 'visible');
//     resetGame();
//   }
// } //end of collision function

// function airportCollision (a, b) {
//   if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))) {
//   //if there is no collision
//   }
//   else {
//     // themeSong.pause();
//     // celebration.play();
//     $("#message-center").text("You win! Your score was " + scoreCounter);
//     bluecifer.y = 1000;
//     setTimeout(function() {
//       resetGame();
//     }, 3000);
//   } //end of else
// } //end of airportCollision function

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
    game.startGame();
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
