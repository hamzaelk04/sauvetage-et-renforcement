let courses = [
    {
        nom: "Lait",
        quantite: 2,
        prix: 4.00
    },
    {
        nom: "Pain",
        quantite: 4,
        prix: 1.50
    },
    {
        nom: "Oeuf",
        quantite: 5,
        prix: 2.00
    },
    {
        nom: "Cola",
        quantite: 1,
        prix: 13.00
    },
    {
        nom: "Glace",
        quantite: 2,
        prix: 6.00
    }
]

let total = 0;
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].nom, "X", courses[i].quantite, "=", courses[i].prix * courses[i].quantite);
    total += courses[i].prix * courses[i].quantite;
}

console.log('totale =', total);
