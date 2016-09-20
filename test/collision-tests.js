const assert = require('chai');
const Enemy = require('../lib/enemies');
const Bluecifer = require('../lib/bluecifer');

describe('Collision', function() {
  context ('Function', function(){
    it('should have a method called "collision()"', function () {
      var enemy = new Enemy();

      assert.isFunction(enemy.collision());
    });
  });
});
