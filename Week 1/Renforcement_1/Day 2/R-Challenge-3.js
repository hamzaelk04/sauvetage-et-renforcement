let nombres = [3, 7, 12, 5, 8, 21, 14, 9, 2, 18];

// Crée pairs : uniquement les nombres pairs → filter(n => n % 2 === 0)
let pairs = nombres.filter(n => n %2 == 0);
console.log(pairs);

// Crée grands : uniquement les nombres > 10
let grands = nombres.filter(n => n > 10);
console.log(grands);

// Calcule la somme avec reduce((acc, n) => acc + n, 0)
let sum = nombres.reduce((acc, n) => acc + n, 0)
console.log(sum);

// Trouve le max avec reduce((max, n) => n > max ? n : max)
let max = nombres.reduce((max, n) => max < n ? n : max);
console.log(max);

// Compte les nombres pairs avec reduce : reduce((count, n) => n % 2 === 0 ? count + 1 : count, 0)
