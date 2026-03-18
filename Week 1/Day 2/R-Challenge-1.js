let fruits = ["pomme", "banane", "orange", "kiwi", "mangue"];

// Ajoute "fraise" et "ananas" à la fin en une seule ligne avec push
fruits.push('fraise', 'ananas');

// Retire le dernier avec pop et affiche l'élément retiré
fruits.pop();
console.log(fruits);

// Utilise includes() pour vérifier si "kiwi" est dans le tableau
console.log(fruits.includes('kiwi'));

// Utilise indexOf() pour trouver la position de "orange"
console.log(fruits.indexOf('orange'));

// Utilise splice(2, 1) pour retirer l'élément à l'index 2
fruits.splice(2, 1);
console.log(fruits);
