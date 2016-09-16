var $ = require('jquery');

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Enemy = require("./enemies.js");
var Bluecifer = require('./bluecifer');

var bluecifer = new Bluecifer (150, 150, 50, 41);

function newEnemy () {
  var enemy = new Enemy();

}

function repeat () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bluecifer.draw(ctx);
  newEnemy();
  requestAnimationFrame(repeat);
}

requestAnimationFrame(repeat);


// setInterval(function () {
//   bluecifer.draw(ctx);
//   // enemy.draw(ctx);
//   // enemy.moveLeftRandom();
//   bluecifer.gravity();
//   // putNewEnemiesOnPage();
// }, 10); //end of setInterval function
//
// setInterval(function () {
//     newEnemy(ctx);
//     // staggerEnemy();
//     detectFloorCollision();
// }, 1000);
// //Make global counter. Everytime setInterval is run, increase counter by 1


//function
//var options = {}
//function newEnemy(){
//if (array.length !== 5){
//array.push new Enemy();
//}}

//create a new enemy if array length is less than 5 and if counter a modulo of 3
// function newEnemy (ctx) {
//   // var counter = 0;
//   // for(var i = 0; i < enemiesArray.length; i++) {
//   // if (enemiesArray.length < 5 && counter % 3 === 0) {
//     var enemy = new Enemy();
//     enemy.draw(ctx);
//     // enemiesArray.push(enemy);
//     enemy.moveLeftRandom();
//     // counter++;
//   // }
//   // return counter;
// // }
// }
//
//
//
// // function randomSpeed (min, max) {
// //   min = 0.5;
// //   max = 3;
// //   return Math.random() * (max - min) + min;
// // }
//
// // function randomY (min, max) {
// //   min = 0;
// //   max = 300;
// //   return Math.floor(Math.random() * (max - min) + min);
// // }
//
// // function staggerEnemy (){
// //   setTimeout(function () {
// //   enemy2.draw(ctx);
// //   enemy2.moveLeftRandom();
// // }, 2000);
// // }
//
// function detectFloorCollision () {
//   if (bluecifer.y > 350) {
//     console.log("game over!");
//     bluecifer.y = 300;
//   }
// }
//
// // function createNewEnemies () {
// //   if (enemiesArray[0] === undefined) {
// //       setTimeout(function () {
// //           var enemy3 = new Enemy();
// //           enemy3.draw(ctx);
// //           enemiesArray.push(enemy3);
// //           enemy3.moveLeftRandom();
// //       }, 500);
// //
// //     }
// // }
//
// // function takeEnemyOutOfArray() {
// //   for (var i = 0; i < enemiesArray.length; i++) {
// //     if (enemiesArray[i].x < 0) {
// //       enemiesArray.splice(0, 2);
// //     }
// //   }
// // } //end of takeEnemyOutOfArray
//
// // function putNewEnemiesOnPage() {
// //   if (enemiesArray[0] === undefined) {
// //     setTimeout(function () {
// //       var counter = 10;
// //         enemy3.draw(ctx);
// //         enemiesArray.push(enemy3);
// //         enemy3.moveLeftRandom();
// //     }, 500);
// //
// //   }
// // } // end of putNewEnemiesOnPage
//
// $(document).on('keydown', function (e) {
//   var code = e.keyCode || e.which;
//   if (code === 32) {
//     bluecifer.moveUp();
//     detectCeilingCollision();
//   } else {
//     return false;
//   }
// });
//
// function detectCeilingCollision () {
//   if (bluecifer.y < 0) {
//     bluecifer.y = bluecifer.y + 10;
//   }
// }
