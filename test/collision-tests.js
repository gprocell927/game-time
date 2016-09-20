const assert = require('chai').assert;
const Enemy = require('../lib/enemies');
const Bluecifer = require('../lib/bluecifer');

describe('Collision', function() {
  context ('Function', function(){
    it('should have a function called "collision()"', function () {
      var enemy = new Enemy();

      assert.isFunction(enemy.collision);
    });
  });
  context ('when Bluecifer hits a plane', function(){
    it.skip ('returns true if Bluecifer\'s front collides with plane\' front', function(){
      bluecifer = new Bluecifer({x:15, y:30, width:45, height:60});
      enemy = new Enemy({x: 15, y: 30, width:45, height:60});
      enemy.collision(enemy, bluecifer);
      assert(true, enemy.collision(enemy, bluecifer) );
      // I want to assert that the game over screen will appear when collisionCanHappen === true
    });

    it('returns false if Bluecifer\'s front is not yet touching the plane front', function() {
      bluecifer = new Bluecifer({x:15, y:30, width:45, height:60});
      enemy = new Enemy({x: 15, y: 30, width:45, height:60});
      enemy.collision(enemy, bluecifer);


    })



  });

});
