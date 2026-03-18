let nombres = [3, 7, 12, 5, 8, 21, 14, 9, 2, 18];

// Crée un tableau doubles où chaque nombre est doublé → map(n => n * 2)
let doubles = nombres.map(n => n * 2)
console.log(doubles);

// Crée un tableau carres où chaque nombre est au carré
let carres = nombres.map(n => n*n)
console.log(carres);


// Crée un tableau textes où chaque nombre est transformé en string : "Le nombre est X"
let textes = nombres.map(n => `le nombre est ${n}`)
console.log(textes);


// Avec un tableau de prénoms, crée un tableau en majuscules avec map + toUpperCase()
let firstname = [
    'Alice',
    'Bob',
    'Hamza',
    'Mehdi',
    'Rachid',
    'Ali',
    'Chaimaa',
    'Khadija'
];

let table = firstname.map(n => n.toUpperCase())

console.log(table);