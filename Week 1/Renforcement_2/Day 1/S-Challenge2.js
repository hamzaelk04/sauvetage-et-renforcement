let notes = [12, 8, 15, 6, 18, 9, 14];

let sum = notes.reduce((acc, n) => acc + n, 0);

let mean = sum / notes.length;

let max = notes.sort((a, b) => b - a)

let condition = notes.filter(n => n > 10);

console.log("la somme est: " + sum);
console.log("la moyenne est: " + mean);
console.log("la plus haute note est: " + max[0]);
console.log("la plus basse note est: " + max[notes.length - 1]);
console.log("le nombre d'élèves qui ont la moyenne (≥ 10) est: " + condition.length);