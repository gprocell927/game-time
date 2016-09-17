var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');
var enemy2 = new Enemy();
var enemy = new Enemy();
var bluecifer = new Bluecifer (150, 150, 50, 41);

var enemiesArray = [];
var counter = 0
function countUp() {
    counter += 1;
    console.log(counter)
  };

setInterval(function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bluecifer.draw(ctx);
  bluecifer.gravity();
  // detectFloorCollision();
  enemiesArray.forEach(function(enemy) {
    enemy.draw(ctx);
    enemy.moveLeftRandom();
  });
  newEnemy(ctx);
  countUp();
}, 0); //end of setInterval function


//Make global counter. Everytime setInterval is run, increase counter by 1


//create a new enemy if array length is less than 5 and if counter a modulo of 3
function newEnemy (ctx) {
  if (enemiesArray < 5 && counter % 2000  === 0) {
    console.log('hello');
    var enemy = new Enemy();
    enemiesArray.push(enemy);
  }
};

$(document).on('keydown', function (e) {
  var code = e.keyCode || e.which;
  if (code === 32) {
    bluecifer.moveUp();
    detectCeilingCollision();
  } else {
    return false;
  }
});

function detectFloorCollision () {
 if (bluecifer.y > 350) {
   console.log("game over!");
   bluecifer.y = 300;
 }
};

function detectCeilingCollision () {
  if (bluecifer.y < 0) {
    bluecifer.y = bluecifer.y + 10;
  }
};
