var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');
var Score = require('./score');

var bluecifer = new Bluecifer (150, 150, 50, 41);

var score = new Score();

var enemy = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

function newEnemy () {
  enemy.draw(ctx);
  collision(enemy, bluecifer);
  enemy.moveLeftRandom();
  // console.log(enemy.speed);
}

function newEnemy2 () {
  enemy2.draw(ctx);
  collision(enemy2, bluecifer);
  setTimeout(function() {
    enemy2.moveLeftRandom();
    return enemy2;
  }, 3000);
}

function newEnemy3 () {
  enemy3.draw(ctx);
  collision(enemy3, bluecifer);
  setTimeout(function() {
    enemy3.moveLeftRandom();
    return enemy3;
  }, 6000);
}

function collision(a, b) {
  if (((a.y + a.height) < (b.y)) || (a.y > (b.y + b.height)) || ((a.x + a.width) < b.x) || (a.x > (b.x + b.width))) {
  //needs to be refactored
  }
  else {
    $('#game-over').css('visibility', 'visible');
    //stop the game
    // resetGame();
  }
}


function advFPS () {
  return null;
}

function repeat () {
  setTimeout(function() {
    requestAnimationFrame(repeat);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bluecifer.draw(ctx);
    bluecifer.gravity();
    newEnemy();
    newEnemy2();
    newEnemy3();
    detectFloorCollision();
    advFPS();
  }, 1000 / advFPS() || 50);
    keepScore();
} //end of big repeat function

function game (){
  repeat();
};

var scoreCounter = 0;

function keepScore() {
    var currentScore =     scoreCounter++;
    if (currentScore <= 100){
   $('#game-score').text("000" + currentScore);
}else if (currentScore <= 1000){
  $('#game-score').text("00" + currentScore);
}else if (currentScore <= 10000){
  $('#game-score').text("0" + currentScore);
}else{
  $('#game-score').text(currentScore);
  }
}

function detectFloorCollision () {
  if (bluecifer.y > 350) {
    resetGame();
    bluecifer.y = 300;
  }
}

$(document).on("keydown", function (key) {
  if (key.which === 32) {
    if ($('#game-over').css('visibility', 'visible')) {
      resetGame();
    }
    else {
      bluecifer.moveUp();
      detectCeilingCollision();
    }
  } //end of main if statement
});






// if ($('.game-over').css('visibility', 'hidden')) {
//   $(document).on('keydown', function (e) {
//   var code = e.keyCode || e.which;
//   if (code === 32) {
//     bluecifer.moveUp();
//     detectCeilingCollision();
//   } else {
//   $(document).on('keydown', function (e) {
//   var code = e.keyCode || e.which;
//   if (code === 32) {
//     resetGame();
//   }
// }
// });


function detectCeilingCollision () {
  if (bluecifer.y < 0) {
    bluecifer.y = bluecifer.y + 20;
  }
}

// function gameOver() {
//   game.stop();
// }

function resetGame () {
  location.reload();
}
