describe('Character', function () {

  it('should be a function', function () {
    assert.isFunction(Character);
  });

  it('should instantiate Bluecifer', function () {
    var bluecifer = new Character();
    assert.isObject(bluecifer);
  });

  it('should take the first argument and set it as the "x" property of the instantiated object', function (){
    var bluecifer = new Character(15);
    assert.equal(bluecifer.x,15);
  });

  it('should take take the second argument and set it as the "y" property of the instantiated object', function () {
    var bluecifer = new Character(15, 30);
    assert.equal(bluecifer.y, 30);
  });

  it('should take the third argument and set it as the "width" property of the instantiated object',
  function () {
    var bluecifer = new Character(15, 30, 45);
    assert.equal(bluecifer.width, 45);
  });

  it('should take the fourth argument and set it as the "height" property of the instantiated object',
  function () {
    var bluecifer = new Character(15, 30, 45, 60);
    assert.equal(bluecifer.height, 60);
  });

  describe ('bluecifer', function (){

    it('should have a method called "moveRight()"', function () {
      var bluecifer = new Character(15, 30);
      assert.isFunction(bluecifer.moveRight);
    });

    it('"moveRight()" should increment the "x" property by 1', function () {
      var bluecifer = new Character(15, 30);
      bluecifer.moveRight();
      assert.equal(bluecifer.x, 16);
    });

    it('should have a method called "moveDown()"', function () {
      var bluecifer = new Character(15, 30);
      assert.isFunction(bluecifer.moveDown);
      });

    it('"moveDown()" should decrement the "y" property by 1', function () {
      var bluecifer = new Character(15, 30);
      bluecifer.moveDown();
      assert.equal(bluecifer.y, 29);
    });

    it('should have a method called "moveUp()', function () {
      var bluecifer = new Character(15, 30);
      assert.isFunction(bluecifer.moveUp);
    });

    it('"moveUp()" should increment the "y" property by 1', function () {
      var bluecifer = new Character(15, 30);
      bluecifer.moveUp();
      assert.equal(bluecifer.y, 31);
    });

    it ('should have a method called "topRight()"', function() {
      var bluecifer = new Character(15, 30, 45, 60);
      assert.isFunction(bluecifer.topRight);
    });

    it ('"topRight()" should find the top right corner of Bluecifer', function () {
      var bluecifer = new Character(15, 30, 45, 60);
      assert.equal(bluecifer.topRight().x, 60);
      assert.equal(bluecifer.topRight().y, 30);
    });

    it('should have a function called "bottomRight()"', function () {
      var bluecifer = new Character(15, 30, 45, 60);
      assert.isFunction(bluecifer.bottomRight);
    });

    it ('"bottomRight()" should find the bottom right corner of Bluecifer', function () {
      var bluecifer = new Character(15, 30, 45, 60);
      assert.equal(bluecifer.bottomRight().x, 60);
      assert.equal(bluecifer.bottomRight().y, 90);
    });








  })



});
