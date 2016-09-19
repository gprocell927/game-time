var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');
var Game = require("./game.js");

var bluecifer = new Bluecifer (150, 150, 50, 41);

$('start-game').css('visibility', 'visible');

var game = new Game();

var themeSong = document.getElementById("theme-song");
var celebration = document.getElementById("celebration");

var scoreCounter = 0;
var enemies = [];

var collisionCanHappen = true;

function drawAirport () {
  var image = new Image();
  image.src = "IMGS/dia-photo.jpg";
  var airport = {};
  airport.x = 150;
  airport.y = 340;
  airport.width = 30;
  airport.height = 30;
  ctx.drawImage(image, airport.x, airport.y, airport.width, airport.height);
  airportCollision(airport, bluecifer);
  return this;
}

function createEnemies() {
  var enemy = new Enemy();
  if (scoreCounter % 50 === 0){
    if (enemies.length < 5){
      enemies.push(enemy);
    }
  }
}
//

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

function collision(a, b) {
  if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width)) || collisionCanHappen === false) {
  //if there is no collision, keep playing
  }
  else {
    themeSong.pause();
    youAreDead();
    $('#game-over').css('visibility', 'visible');
    resetGame();
  }
} //end of collision function

function airportCollision (a, b) {
  if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))) {
  //if there is no collision, keep playing
  }
  else {
    themeSong.pause();
    celebration.play();
    $("#message-center").text("You win! Your score was " + scoreCounter);
    bluecifer.y = 1000;
}
}
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bluecifer.draw(ctx);
    bluecifer.gravity();
    // newEnemy();
    // newEnemy2();
    // newEnemy3();
    createEnemies();
    enemies.forEach(function(enemy) {
      enemy.draw(ctx);
      collision(enemy, bluecifer);
      enemy.moveLeftRandom();
    });
    detectFloorCollision();
    keepScore();
//end of big repeat function
  }, 1000 / 100);
   game.keepScore();
  }
}

$(document).on("click", function () {
  // themeSong.play();
  $('#start-game').css('visibility', 'hidden');
  $('#game-over').css('visibility', 'hidden')
  repeat();
});


function keepScore() {
  var currentScore = scoreCounter++;
  if (currentScore <= 100){
    $('#game-score').text("000" + currentScore);
  }else if (currentScore <= 1000){
    $('#game-score').text("00" + currentScore);
  }else if (currentScore <= 10000){
    $('#game-score').text("0" + currentScore);
    drawAirport();
  }else{
    $('#game-score').text(currentScore);
  }
}

// var scoreCounter = 0;

// function keepScore() {
//     var currentScore = scoreCounter++;
//     if (currentScore <= 100){
//    $('#game-score').text("000" + currentScore);
//  }else if (currentScore <= 1000){
//   $('#game-score').text("00" + currentScore);
// }else if (currentScore <= 10000){
//   $('#game-score').text("0" + currentScore);
//   drawAirport();
// }else{
//   $('#game-score').text(currentScore);
//   }
// }

// function detectFloorCollision () {
//   if (bluecifer.y > 350) {
//     themeSong.pause();
//     resetGame();
//     // stopGame();
//     youAreDead();
//     bluecifer.y = 300;
//   }
// }

$(document).on("keydown", function (key) {
  if (key.which === 32) {
    if ($('start-game').css('visibility', 'hidden')) {
      game.bluecifer.moveUp();
      game.detectCeilingCollision();
    }
    else {
      game.resetGame();
    }
  } //end of if statement for space bar
  else if (key.which === 13) {
    themeSong.pause();
  } // end of if statement for enter key
  else if (key.which === 85 && scoreCounter === 0) {
    var code = prompt("Enter cheat code");
    cheat(code);
  } // end of if statement for u key
}); //end of entire function

// function detectCeilingCollision () {
//   if (bluecifer.y < 0) {
//     bluecifer.y = bluecifer.y + 20;
//   }
// }

function cheat(code) {
  if (code === "dogs") {
    collisionCanHappen = false;
    alert("Cheat mode activated!");
  }
  else {
    alert("Nope, wrong code!");
  }
}

// function resetGame () {
//   location.reload();
//   $('start-game').css('visibility', 'hidden');
//   repeat();
// }


// function youAreDead () {
//   $('#game-over').css('visibility', 'visible');
//   // $("#message-center").text("Game Over! Your score was " + scoreCounter);
