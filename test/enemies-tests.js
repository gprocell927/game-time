const assert = require('chai').assert;
const Enemy = require("../lib/enemies.js");

<<<<<<< HEAD
// var enemyArray = enemies.enemyArray;

describe("enemyArray", function () {

  it("should be an array", function () {
    var enemy = new Enemy();
    assert.isArray(enemy.enemyArray);
  });
});

=======
>>>>>>> f9c70e7118ff48b266ab0821638db29d3d5e542f
describe("Enemy", function () {

  it('should be a function', function () {
    assert.isFunction(Enemy);
  });

  it('should instantiate Enemy', function () {
    var enemy = new Enemy();
    assert.isObject(enemy);
  });

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

      it('should assign the width to 50 by default', function () {
        var enemy = new Enemy();
        assert.strictEqual(enemy.width, 50);
      });

      it('should assign the height to 35 by default', function () {
        var enemy = new Enemy();
        assert.strictEqual(enemy.height, 35);
      });

  });
});

describe ('enemy', function () {


});

      it("should have a default width of 50", function () {
        var enemy = new Enemy();
        assert.strictEqual(enemy.width, 50);
      });

      it("should have a default height of 35", function () {
        var enemy = new Enemy();
        assert.strictEqual(enemy.height, 35);
      });
      it("should have a default pic of the airplane", function () {
        var enemy = new Enemy();
        assert.strictEqual(enemy.image, "../IMGS/airplane.png");
      });

      it("should have a default speed of equal or less than 3", function () {
        var enemy = new Enemy();
        assert.isBelow(enemy.speed, 3.001);
      });

      it("should have a default y coord of equal or less than 300", function () {
        var enemy = new Enemy();
        assert.isBelow(enemy.y, 301);
      });
  });
}); // end of describe Enemy
