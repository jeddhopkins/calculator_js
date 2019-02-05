describe('Calculator', function() {

  beforeEach(function() {
    let calc = new Calculator();
  });

  describe('adding numbers', function() {
    it('3 + 3 should equal 6', function() {
      expect(calc.add).toEqual(6)
    });
  });
});
