const assert = require('chai').assert;
const Enemy = require("../lib/enemies.js");
// const Bluecifer = require('../lib/bluecifer');

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
  });
}); // end of describe Enemy
