const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isPrime(number, divisor = 2) {
  if (number < 2) return false;
  if (divisor > Math.sqrt(number)) return true;
  if (number % divisor === 0) return false;
  return isPrime(number, divisor + 1);
}


arr.forEach(number => {
  console.log(`${number} is prime? ${isPrime(number)}`);
});
