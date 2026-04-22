-- Toutes les gares desservies par la ligne "TGV Paris-Lyon" avec l'heure de passage
SELECT g.nom AS gare, g.ville, a.heure_passage
FROM lignes l
JOIN arrets a ON l.id = a.ligne_id
JOIN gares g ON g.id = a.gare_id
WHERE l.nom = 'TGV Paris-Lyon'
ORDER BY a.ordre;