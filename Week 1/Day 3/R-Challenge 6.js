let contact = {
    nom: "elkabraoui",
    prenom: 'hamza',
    tel: '0612345678',
    email: 'hamza@hamza.com',
    adresse: {
        rue: 'chahdia',
        ville: 'meknes',
        cp: 50000
    }
}

// Affiche le nom complet
console.log(contact.nom, contact.prenom);

// Affiche la ville (accès imbriqué : contact.adresse.ville)
console.log(contact.adresse.ville);

// Change le numéro de téléphone
contact.tel = '1234567890'
console.log(contact.tel);

// Ajoute une propriété "age"
contact.age = 21
console.log(contact);

// Parcours toutes les clés avec Object.keys() et affiche "clé : valeur" pour chacune
Object.keys(contact).forEach(p => {
    console.log(p + ' : ' + contact[p]);
})

// Parcours avec Object.entries() et affiche sous forme de phrases
Object.entries(contact).forEach(([key, value]) => {
    console.log(`Le cle: ${key}, et la valeur ${value}`); 
})