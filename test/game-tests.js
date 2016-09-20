const assert = require('chai').assert;
const Game = require('../lib/game.js');
const Bluecifer = require('../lib/bluecifer.js');
const Enemy = require('../lib/enemies.js');

describe ('The Game', function() {
  context('Functions', function() {
    it ('there should be an array that stores enemies', function(){
      var game = new Game();
      assert.isArray(game.enemies, true);
    });
    it ('the method called "createNewEnemies()" should make an array of enemies', function () {
      var game = new Game();
      game.createNewEnemies();

      assert.equal([{enemy}], game.createNewEnemies)
    })
  });
});
