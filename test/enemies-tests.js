const assert = require('chai').assert;
const Enemy = require("../lib/enemies.js");

// var enemyArray = enemies.enemyArray;

describe("enemyArray", function () {

  it("should be an array", function () {
    var enemy = new Enemy();
    assert.isArray(enemy.enemyArray);
  });
});

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



//
//
// const Dingus = require('../lib/dingus');
//
// describe('Dingus', function(){
//   context('with default attributes', function(){
//     it('should assign default coordinates and size', function(){
//       var dingus = new Dingus();
//       assert.equal(dingus.x, 0);
//       assert.equal(dingus.y, 0);
//       assert.equal(dingus.height, 10);
//       assert.equal(dingus.width, 10);
//     });
//   });
//
//   context('with set attributes', function(){
//     var x = 45;
//     var y = 67;
//     var height = 42;
//     var width = 1;
//
//     it('allows me to set height, width, x, and y', function(){
//       // create a Dingus with x, y, height and width defined
//       // test that our set qualities are the end result
//       var options = { width: width, height: height, y: y, x: x };
//       var dingus = new Dingus(options);
//       assert.equal(dingus.x, x);
//       assert.equal(dingus.y, y);
//       assert.equal(dingus.height, height);
//       assert.equal(dingus.width, width);
//     });
//
//     it('allows me to set only width', function(){
//       var options = { width: width };
//       var dingus = new Dingus(options);
//       assert.equal(dingus.width, width, 'width was improperly set');
//       assert.equal(dingus.x, 0, 'x is not the default');
//     });
//   });
// });
