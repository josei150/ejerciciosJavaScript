const primeFactors = (number) => {
  const factors = [];
  let target = number;

  // Función para verificar si un número es primo
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  // Encontrar los factores primos
  for (let i = 2; i <= Math.sqrt(target); i++) {
    while (isPrime(i) && target % i === 0) {
      factors.push(i);
      target /= i;
    }
  }

  // Si el target es un número primo mayor al último factor encontrado
  if (target > 1) {
    factors.push(target);
  }

  return factors;
};
// console.log(primeFactors(1))
// console.log(primeFactors(2))
// console.log(primeFactors(3))
// console.log(primeFactors(4))
// console.log(primeFactors(6))
// console.log(primeFactors(8))
// console.log(primeFactors(9))
// console.log(primeFactors(12))
// console.log(primeFactors(27))
// console.log(primeFactors(625))
// console.log(primeFactors(901255))
 console.log(primeFactors(93819012551))