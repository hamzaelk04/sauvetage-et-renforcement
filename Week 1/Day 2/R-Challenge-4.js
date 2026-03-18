let table = [
    {nom: "hamza", note: 19},
    {nom: "adnane", note: 1},
    {nom: "bahou", note: 1.9},
    {nom: "oughlane", note: 0},
    {nom: "ghizlane", note: -19},
    {nom: "aymane", note: 12},

];

// Trie par note décroissante avec sort((a, b) => b.note - a.note)
table.sort((a, b) => b.note - a.note)
console.log(table);

// Filtre ceux qui ont la moyenne (≥ 10) avec filter
let grand = table.filter(n => n.note > 10);
console.log(grand);

// Trouve "Charlie" avec find(e => e.nom === "Charlie")
find = table.find(e => e.nom === 'Charlie')
console.log(find);

// Vérifie si tous ont ≥ 5 avec every(e => e.note >= 5)
check = table.every(n => n.note > 5);
console.log(check);

// Vérifie si au moins un a 18+ avec some(e => e.note >= 18)
check2 = table.some(n => n.note >= 18);
console.log(check2);

// Calcule la moyenne de la classe avec reduce
mean = table.reduce((acc, n) => acc + n.note, 0) / table.length
console.log(mean);
