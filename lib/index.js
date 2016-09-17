var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');

var bluecifer = new Bluecifer (150, 150, 50, 41);

var enemy = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();

function newEnemy () {
  enemy.draw(ctx);
  enemy.moveLeftRandom();
}

function newEnemy2 () {
  enemy2.draw(ctx);
  setTimeout(function() {
    enemy2.moveLeftRandom();
    return enemy2;
  }, 3000);
}

function newEnemy3 () {
  enemy3.draw(ctx);
  setTimeout(function() {
    enemy3.moveLeftRandom();
    return enemy3;
  }, 6000);
}


var fps = 50;

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
  }, 1000 / fps);

}

repeat();

function detectFloorCollision () {
  if (bluecifer.y > 350) {
    console.log("game over!");
    bluecifer.y = 300;
  }
}


$(document).on('keydown', function (e) {
  var code = e.keyCode || e.which;
  if (code === 32) {
    bluecifer.moveUp();
    detectCeilingCollision();
  } else {
    return false;
  }
});

function detectCeilingCollision () {
  if (bluecifer.y < 0) {
    bluecifer.y = bluecifer.y + 10;
    alert("Ouch!");
  }
}
