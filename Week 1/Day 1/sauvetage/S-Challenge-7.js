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

function chercher(tableau, prenom){
    for (let i = 0; i < tableau.length; i++) {
        if (prenom === tableau[i]) {
            return console.log("Trouvé à la position", i);
        }
    }
    return console.log("Non trouvé");
}

chercher(firstname, 'Khadija')

chercher(firstname, 'Inas')