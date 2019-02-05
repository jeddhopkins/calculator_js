describe('Calculator', function() {

var calc;
  beforeEach(function() {
    calc = new Calculator();
  });

  describe('adding numbers', function() {
    it('3 + 3 should equal 6', function() {
      expect(calc.add(3, 3)).toEqual(6)
    });
  });
});
