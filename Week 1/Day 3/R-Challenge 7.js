const produits = [
  { id: 1, nom: "Ordinateur portable", prix: 7500, categorie: "Électronique", stock: 12 },
  { id: 2, nom: "Smartphone", prix: 3200, categorie: "Électronique", stock: 25 },
  { id: 3, nom: "Chaise de bureau", prix: 850, categorie: "Mobilier", stock: 8 },
  { id: 4, nom: "Clavier mécanique", prix: 600, categorie: "Accessoires", stock: 15 },
  { id: 5, nom: "Souris sans fil", prix: 250, categorie: "Accessoires", stock: 30 },
  { id: 6, nom: "Écran 24 pouces", prix: 1800, categorie: "Électronique", stock: 10 },
  { id: 7, nom: "Bureau en bois", prix: 2200, categorie: "Mobilier", stock: 5 },
  { id: 8, nom: "Casque audio", prix: 400, categorie: "Audio", stock: 20 }
];

// Affiche tous les noms avec map(p => p.nom)
console.log(produits.map(p => p.nom));

// Filtre les produits à moins de 50€
let byPrice = produits.filter(p => p.prix > 50)
console.log(byPrice);

// Filtre par catégorie "Électronique"
let categorie = produits.filter(p => p.categorie === 'Électronique')
console.log(categorie);

// Trie par prix croissant
let sort = produits.sort((a, b) => a.prix - b.prix)
console.log(sort);

// Trouve le produit le plus cher avec reduce
let max = produits.reduce((max, cur) => {
    return max.prix > cur.prix ? max : cur
})

console.log(max);

// Calcule la valeur totale du stock : reduce((total, p) => total + p.prix * p.stock, 0)
let total = produits.reduce((tot, p) => tot + p.prix * p.stock, 0)
console.log(total);

// Vérifie si "Laptop" existe avec some
let find = produits.find(nom => nom.nom === 'Smartphone')
console.log(find);

// Crée un résumé par catégorie avec reduce : {Électronique: 3, Vêtement: 2, ...}