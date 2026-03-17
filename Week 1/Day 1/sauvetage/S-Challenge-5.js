let personne = {
    firstname: 'hamza',
    lastname: 'elkabraoui',
    age: 21,
    city: 'Meknes',
}

console.log("Bonjour, Je suis", personne.firstname, personne.lastname);

personne.city = "Ouarzazate";

console.log(personne);

personne.email = "hamza@hamza.com"

console.log(personne);

console.log(Object.keys(personne));
