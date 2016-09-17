const assert = require('chai').assert;
const Enemy = require("../lib/enemies.js");

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

describe("Enemy.detectCollision", function () {
  it("should be a function", function () {
    var enemigo = new Enemy();
    assert.isFunction(enemigo.collision());
  });
});
