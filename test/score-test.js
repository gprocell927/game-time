const assert = require('chai').assert;
const Score = require("../lib/score.js");



describe("Score", function () {

  it('should be a function', function () {
    assert.isFunction(Score);
  });

  it('should instantiate Score', function () {
    var score = new Score();
    assert.isObject(score);
  });

  context('"Score()" should have default attributes', function () {
    it('should have a type of "text" by default', function () {
      var score = new Score({type:"text"});
      assert.strictEqual(score.type, "text");
    });
  context('"Score()" should have customizable attributes', function (){
    it('should have a customizable width', function (){
      var score = new Score({width: 250});
      assert.equal(score.width, 250);
    });

    it('should have a customizable height', function (){
      var score = new Score({height: 150});
      assert.equal(score.height, 150);
    });

    it('should be able to assign an x coordinate', function () {
      var score = new Score({x: 150});
      assert.equal(score.x, 150);
    });

    it('should be able to assign an y coordinate', function () {
      var score = new Score({y: 450});
      assert.equal(score.y, 450);
    });

  });
});
});
