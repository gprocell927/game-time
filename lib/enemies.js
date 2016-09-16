var $ = require('jquery');
var enemies = [];

function Enemy (options) {
  this.options = options || {};
  this.x = 500 ;
  this.y = this.options.y || 250;
  this.width = this.options.width || 50;
  this.height = this.options.height || 35;
  this.image = this.options.image || "../IMGS/airplane.png";
  this.speed = this.options.speed || 1;
}


function randomSpeed (min, max) {
  min = 1;
  max = 5;
  return Math.random() * (max - min) + min;
}

function randomY (min, max) {
  min = 0;
  max = 300;
  return Math.random() * (max - min) + min;
}

var enemyArray = [];

Enemy.prototype.draw = function (ctx) {
  var image = new Image();
  image.src = this.image;
  ctx.drawImage(image, this.x, this.y, this.width, this.height);
  return this;

};

Enemy.prototype.moveLeftAssigned = function () {
  this.x = this.x - this.speed;
};

Enemy.prototype.moveLeftRandom = function () {
    this.x = this.x - randomSpeed();
};

Enemy.prototype.moveUpAssigned = function () {
  this.y = this.y + this.speed;
};

module.exports = Enemy;





// function createNewEnemyWhenOneLeavesScreen(){
//   enemies.forEach(function(enemy){
//     if (enemies.length === 0){
//       enemy.draw(ctx);
//     } else if(enemies.forEach(function(enemy){
//           if (enemy.x < 0){
//             enemy.draw(ctx);
//           })
//         })
//       })
//     }
//
//     function createNewEnemyWhenOneLeavesScreen(){
//       enemies.forEach(function(enemy){
//         if (enemies.length === 0){
//           enemy.draw(ctx);
//         } else if (enemies.forEach(function(enemy){
//           if(enemy.x<0){
//             enemy.draw(ctx);
//           }
//         }))
//       })
//     }
// // var plane = new Enemy(400, randomY(), 50, 35, "../IMGS/airplane.png", 2);
// // var bird = new Enemy(10, randomY(), 60, 100); //need to add image and speed of 4
// // var building = new Enemy(50, 450, 20, 300); //need to add image and speed
// //
// // var enemyArray = [];
