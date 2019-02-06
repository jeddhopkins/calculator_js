function Calculator() {
};

Calculator.prototype.add = function(num1, num2) {
  return num1 + num2;
};

Calculator.prototype.subtract = function (num1, num2) {
  return num1 - num2
};

Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2
};

Calculator.prototype.divide = function (num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide a number by zero");
} else {
    return num1 / num2;
  };
};

Calculator.prototype.square = function (num) {
  return num * num
};

Calculator.prototype.sqroot = function (num) {
  return Math.sqrt(num)
};

Calculator.prototype.addThreeNumbers = function (num1, num2, num3) {
  return num1 + num2 + num3
};

let calc = new Calculator
console.log(calc.divide(10, 2));
