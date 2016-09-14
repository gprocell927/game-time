var $ = require("jquery");

function World (width, height) {
  this.width = width;
  this.height = height;
}

function Bird(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

function Plane(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

function Cloud(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

function Building(x, y, width, height, world) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.world = world;
}

World.prototype.birds = [];

World.prototype.addBird = function (x, y, width, height) {
  var bird = new Bird(x, y, width, height, this);
  this.birds.push(bird);
};

World.prototype.planes = [];

World.prototype.addPlane = function (x, y, width, height) {
  var plane = new Plane(x, y, width, height, this);
  this.planes.push(plane);
};

World.prototype.clouds = [];

World.prototype.addCloud = function (x, y, width, height) {
  var cloud = new Cloud(x, y, width, height, this);
  this.clouds.push(cloud);
};

World.prototype.buildings = [];

World.prototype.addBuilding = function (x, y, width, height) {
  var building = new Building(x, y, width, height, this);
  this.buildings.push(building);
};

var random = Math.floor(Math.random() * 1500);

//use an object literal to apply prototypes to different objects?

Bird.prototype.moveLeftSimple = function () {
  this.x--;
  return this;
};

Bird.prototype.moveRightSimple = function () {
  this.x++;
  return this;
};

Bird.prototype.moveUpSimple = function () {
  this.y++;
  return this;
};

Bird.prototype.moveDownSimple = function () {
  this.y--;
  return this;
};

Bird.prototype.moveLeftRandom = function () {
  this.x = this.x - random;
};

Bird.prototype.moveRightRandom = function () {
  this.x = this.x + random;
};

Bird.prototype.moveUpRandom = function () {
  this.x = this.y + random;
};

Bird.prototype.moveDownRandom = function () {
  this.x = this.y - random;
};

//these can also be tweaked and randomized if they work

Bird.prototype.moveUpAndDown = function name (distance, time) {
  setInterval(function () {
      setTimeout(function () {
        $(this).animate({top: "+=distance"}, time);
      }, 1000);
      setTimeout(function () {
        $(this).animate({top: "-=distance"}, time);
      }, 1000);
    }, 3000);
};

Bird.prototype.moveLeftAndRight = function name (distance, time) {
  setInterval(function () {
      setTimeout(function () {
        $(this).animate({right: "+=distance"}, time);
      }, 1000);
      setTimeout(function () {
        $(this).animate({right: "-=distance"}, time);
      }, 1000);
    }, 3000);
};

module.exports = new Image();
