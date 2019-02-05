function FizzBuzz() {
};

FizzBuzz.prototype.numbers = function(number) {
  if (number % 15 === 0) {return 'FizzBuzz';}
  if (number % 5 === 0) {return 'Buzz';}
  if (number % 3 === 0) {return 'Fizz';}
  return number;
};

let fizzBuzz = new FizzBuzz();

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz.numbers(i));
};
