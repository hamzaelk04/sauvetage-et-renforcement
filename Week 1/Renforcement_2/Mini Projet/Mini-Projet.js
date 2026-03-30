let users = [];
let annonces = [];
let id_user = 0;
let id_annonce = 0;

function menu() {
    let running = true
    while (running) {
        let choice = Number(prompt(`1. Ajouter un utilisateur\n
        2.Afficher les utilisateurs\n
        3.Publier une annonce\n
        4.Recherche sur une annonce\n
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
                checkSeller();
                break;
            case 4:
                searchMenu()
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

menu();

function createUser() {
    let user = {}

    user.id = ++id_user
    user.pseudo = prompt('Donnez le pseudo: ');
    user.email = prompt('Donnez le email: ');
    user.role = prompt('Donnez le role: ');
    while (user.role !== 'vendeur' && user.role !== 'acheteur') {
        alert("le role doit etre (vendeur/acheteur)");
        user.role = prompt('Donnez le role: ');
    }
    user.note = prompt('Donnez le note: ');
    user.solde = prompt('Donnez le solde: ');

    return user;
}

function menuAnnonce(id) {
    let running = true;
    while (running) {
        let choice = Number(prompt(`1. Publier une annonce\n
        2.Consulter les annonces\n
        3.Modifier le prix d'une annonce\n
        4.Retirer une annonce\n
        0.Quit`));

        switch (choice) {
            case 1:
                let annonce = CreateAnnonce(id);
                annonces.push(annonce);
                break;
            case 2:
                annonces.forEach(an => {
                    console.log(an);
                });
                break;
            case 3:
                updatePriceAnnonce()
                break;
            case 4:
                deleteAnnonce();
                break;
            case 0:
                running = false;
                break;
            default:
                alert('choix invalide');
                break;
        }
    }
}

function checkSeller() {
    let vendeur_id = prompt("Donnez l'id du vendeur: ");

    let newUser = users.find(user => user.id == vendeur_id);

    if (newUser != undefined) {
        if (newUser.role === 'vendeur') {
            menuAnnonce(vendeur_id);
        } else {
            alert("L'acheteur ne peut pas publier une annonce");
        }
    } else {
        alert("Ce id n'existe pas");
    }
}

function CreateAnnonce(vendeur_id) {
    let annonce = {};

    annonce.id = ++id_annonce;

    annonce.vendeur_id = vendeur_id;
    annonce.titre = prompt("Donnez le titre d'annonce: ");
    annonce.description = prompt("Donnez le description d'annonce: ");
    annonce.prix = prompt("Donnez le prix d'annonce: ");
    annonce.categorie = prompt("Donnez le categorie d'annonce: ");
    annonce.etat = prompt("Donnez le etat d'annonce: ");
    annonce.statut = prompt("Donnez le statut d'annonce: ");
    annonce.date_publication = prompt("Donnez la date_publication d'annonce: ");

    return annonce;
}

function updatePriceAnnonce() {
    let id = prompt("DOnnez l'id d'annonce");

    let index = annonces.findIndex(annonce => annonce.id == id);

    if (index == -1) {
        return alert("ce Id n'existe pas");
    } else {
        let price = Number(prompt("Donnez le nouveau prix d'annonce"));

        annonces[index].prix = price;

        console.log(annonces[index]);
    }
}

function deleteAnnonce() {
    let id = prompt("DOnnez l'id d'annonce");

    let index = annonces.findIndex(annonce => annonce.id == id);

    if (index == -1) {
        return alert("ce Id n'existe pas");
    } else {
        annonces.splice(index, 1);

        alert("annonce deleted");
    }
}

function searchMenu() {
    let running = true;
    while (running) {
        let choice = Number(prompt(`1. Recherche par mot-clé\n
        2.filtrer\n
        3. Tri
        0.Quit`));
        switch (choice) {
            case 1:
                let key = prompt('search');
                let results = searchByKeyWord(key);
                if (results.length > 0) {
                    results.forEach(result => {
                        console.log("le titre " + result.titre + "le prix: " + result.prix);
                    });
                } else {
                    alert("les resultats non trouves")
                }

                break;
            case 2:
                let categorie = prompt("Donne la categorie:");
                let max = prompt("Donne le max prix:");
                let min = prompt("Donne le min prix:");
                let etat = prompt("Donne l'etat:");
                
                let filtred = filter(categorie, max, min, etat);

                if (filtred.length > 0) {
                    filtred.forEach(item => {
                        console.log("le titre " + item.titre + "le prix: " + item.prix);   
                    })
                } else {
                    alert("les resultats non trouves")
                }
                break;
            case 0:
                running = false
                break;

            default:
                break;
        }
    }
}

function searchByKeyWord(key) {
    let titles = annonces.filter(n => n.titre === key)
    let descriptions = annoncds.filter(n => n.description === key)

    let searched = titles.concat(descriptions);
    return searched;
}

function filter(categorie, max, min, etat) {
    let filtred = annonces.filter(annonce => 
        annonce.categorie === categorie || !categorie &&
        annonce.prix <= max || !max &&
        annonce.prix >= min || !min &&
        annonce.etat === etat || !etat
    );

    return filtred
}

function acheterAnnonce(acheteur, annonce, historique) {
    if (annonce.statut !== "disponible") {
        return "Annonce non disponible";
    }

    if (acheteur.solde < annonce.prix) {
        return "Solde insuffisant";
    }

    const vendeur = annonce.vendeur;
    const prix = annonce.prix;
    const commission = prix * 0.05;
    const montantVendeur = prix - commission;

    acheteur.solde -= prix;
    vendeur.solde += montantVendeur;

    annonce.statut = "vendu";

    const transaction = {
        id: Date.now(),
        date: new Date(),
        acheteur: acheteur.pseudo,
        vendeur: vendeur.pseudo,
        annonce: annonce.titre,
        montant: prix,
        commission: commission
    };

    historique.push(transaction);

    return "Achat effectué avec succès";
}

function ajouterAvis(acheteur, vendeur, transactionId, note, commentaire, avisList) {
    const existe = avisList.find(a => a.transactionId === transactionId);

    if (existe) {
        return "Avis déjà donné pour cette transaction";
    }

    const avis = {
        transactionId,
        acheteur: acheteur.pseudo,
        vendeur: vendeur.pseudo,
        note,
        commentaire
    };

    avisList.push(avis);

    recalculerNoteMoyenne(vendeur, avisList);

    return "Avis ajouté";
}

function recalculerNoteMoyenne(vendeur, avisList) {
    const notes = avisList
        .filter(a => a.vendeur === vendeur.pseudo)
        .map(a => a.note);

    if (notes.length > 0) {
        vendeur.noteMoyenne =
            notes.reduce((sum, n) => sum + n, 0) / notes.length;
    } else {
        vendeur.noteMoyenne = 0;
    }
}

function afficherProfilVendeur(vendeur, annonces, avisList) {
    const ventes = annonces.filter(a =>
        a.vendeur.pseudo === vendeur.pseudo && a.statut === "vendu"
    );

    const avis = avisList.filter(a => a.vendeur === vendeur.pseudo);

    return {
        pseudo: vendeur.pseudo,
        noteMoyenne: vendeur.noteMoyenne || 0,
        nombreVentes: ventes.length,
        avis: avis
    };
}