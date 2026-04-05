-- Tables : livres(id, titre, prix, annee_publication, editeur_id, genre_id), editeurs(id, nom, pays), genres(id, nom), ventes(id, livre_id, client, quantite, date_vente)


-- Chaque livre avec le nom de son éditeur et le nom de son genre (3 tables)
SELECT l.titre, e.nom, g.nom FROM livres l
JOIN editeurs e ON l.editeur_id = e.id
JOIN genres g ON l.genre_id = g.id

-- Le nombre de livres par éditeur, trié du plus au moins prolifique
SELECT e.nom, COUNT(l.id) AS nb_livre FROM editeurs e
JOIN livres l ON e.id = l.editeur_id
GROUP BY e.nom
ORDER BY nb_livre DESC

