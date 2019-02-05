describe('Calculator', function() {

var calc = new Calculator();
  // beforeEach(function() {
  //   calc = new Calculator(); // interesting that i dont need a before block
  // });

  describe('adding numbers', function() {
    it('3 + 3 should equal 6', function() {
      expect(calc.add(3, 3)).toEqual(6);
    });
  });

  describe('subtracting numbers', function() {
    it('5 - 3 should equal 2', function () {
      expect(calc.subtract(5, 3)).toEqual(2);
    });
  });

  describe('multiplying numbers', function() {
    it('2 * 2 should equal 4', function() {
      expect(calc.multiply(2, 2)).toEqual(4);
    });
  });

  describe('dividing numbers', function(){
    it('10 / 2 should equal 5', function() {
      expect(calc.divide(10, 2)).toEqual(5);
    });
  });

  describe('square numbers', function() {
    it('2 squared should equal 4', function() {
      expect(calc.square(2)).toEqual(4);
    });
  });

  describe('square root', function() {
    it('square root of 9 should equal 3', function() {
      expect(calc.sqroot(9)).toEqual(3);
    });
  });

  describe('add three numbers', function() {
    it('5 + 5 + 5 should equal 15', function() {
      expect(calc.addThreeNumbers(5, 5, 5)).toEqual(15);
    });
  });
});
