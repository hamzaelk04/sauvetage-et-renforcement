const fruits = ["pomme", "banane", "orange"];

console.log(fruits[1]);

// -----------------------------------------------
const couleurs = ["rouge", "bleu", "vert"];

couleurs.push('violet');

console.log(couleurs.length);

// --------------------------------------------
let personne = {
    nom: 'Alice',
    age: 25,
    ville: 'Paris'
};

console.log(personne.nom);

// --------------------------------------------------
let animaux = ["chat", "chien", "lapin", "tortue"];

for (let i = 0; i < animaux.length; i++) {
    console.log(animaux[i]);
}

// -----------------------------------------------------
let courses = [
    { nom: "Pain", prix: 15 },
    { nom: "Lait", prix: 25 },
    { nom: "Oeufs", prix: 35 }
];

let total = 0;

for (let i = 0; i <courses.length; i++){
    total += courses[i].prix;
}

console.log(total);
