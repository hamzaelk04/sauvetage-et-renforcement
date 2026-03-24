let users = [];
let id = 0;
let id_annonce = 0;

function menu() {
    let running = true
    while (running) {
        let choice = Number(prompt(`1. Ajouter un utilisateur\n
        2.Afficher les utilisateurs\n
        0.Quit`));
        switch (choice) {
            case 1:
                let user = createUser();
                users.push(user);
                break;
            case 2:
                users.forEach(user => {
                    console.log(user);
                })
                break;
            case 3:
                
                break;
            case 0:
                running = false;
                break
            default:
                console.log("Choix invalide");
                break;
        }
    }
}

menu()

function createUser() {
    let user = {}

    user.id = ++id
    user.pseudo = prompt('Donnez le pseudo: ');
    user.email = prompt('Donnez le email: ');
    let role = prompt('Donnez le role: ');
    while (role !== 'vendeur' && role !== 'acheteur') {
        alert("le role doit etre (vendeur/acheteur)");
        role = prompt('Donnez le role: ');
    }
    user.role = role;
    user.note = prompt('Donnez le note: ');
    user.solde = prompt('Donnez le solde: ');

    return user;
}

function CreateAnnonce() {
    let annonce = {};

    annonce.id = ++id;
    annonce.vendeur_id = prompt("Donnez l'id du vendeur: ");
}