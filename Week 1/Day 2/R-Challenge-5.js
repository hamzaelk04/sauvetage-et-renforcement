let table1 = [1,2,3,4,5,6,7,8,9]
let tbale2 = [9,8,7,6,5,4,3,2,1]
//Fusionne deux tableaux avec le spread : const tous = [...tab1, ...tab2]
let merged = table1.concat(tbale2);
console.log('merged table:', merged);

// Copie un tableau sans le modifier : const copie = [...original]
// Déstructure un tableau : const [premier, deuxieme, ...reste] = tableau
// Déstructure un objet : const {nom, age} = personne
// Crée une fonction qui prend un objet et retourne une phrase : const {nom, ville} = params; return "Je suis ${nom} de ${ville}"