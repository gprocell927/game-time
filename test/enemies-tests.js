const assert = require('chai').assert;
const Enemy = require("../lib/enemies.js");
const Bluecifer = require('../lib/bluecifer');

// var enemyArray = enemies.enemyArray;

describe("enemyArray", function () {
  it("should be an array", function () {
    var enemy = new Enemy();
    assert.isArray(enemy.enemyArray);
  });
});

// var Enemy = enemies.Enemy;

describe("Enemy", function () {
    context("it allows me to customize it", function () {
      it("should let me assign a height and width", function () {
        var enemy = new Enemy({height:10, width:15});
        assert.strictEqual(enemy.height, 10);
        assert.strictEqual(enemy.width, 15);
      });

      it("should default to 500 for its x coord", function () {
        var enemy = new Enemy();
        assert.strictEqual(enemy.x, 500);
      });

  });
}); // end of describe Enemy

describe("Enemy.collision()", function () {
  it("should record an enemy's x value", function () {
    var enemy = new Enemy();
    enemy.collision();
    assert.strictEqual(enemy.x, 500);
  });

  it("should record bluecifer's x coord", function () {
    var bluecifer = new Bluecifer (150, 150, 50, 41);
    var enemy = new Enemy();
    enemy.collision();
    assert.strictEqual(bluecifer.x, 150);
  });
}); //end of describe Enemy.collision();
