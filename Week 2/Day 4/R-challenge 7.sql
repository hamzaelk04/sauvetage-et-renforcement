-- medecins(id, nom, specialite), 
-- patients(id, nom, date_naissance), 
-- consultations(id, medecin_id, patient_id, date_consultation, diagnostic, cout), 
-- prescriptions(id, consultation_id, medicament, posologie)

-- La liste des consultations avec le nom du médecin, le nom du patient et le diagnostic (3 tables)
SELECT c.*, m.nom, p.nom
FROM consultations c
JOIN medecins m ON c.medecin_id = m.id
JOIN patients p ON c.patient_id = p.id

-- Le nombre de consultations par médecin ce mois-ci
SELECT m.nom, COUNT(c.id) 
FROM medecins m
JOIN consultations c ON c.medecin_id = m.id
WHERE c.date_consultation BETWEEN '2026-04-01' AND '2026-04-30'
GROUP BY m.id

-- Le coût total des consultations par patient
SELECT p.nom, SUM(c.cout) 
FROM patients p
JOIN consultations c ON c.patient_id = p.id
GROUP BY p.nom

-- Les patients qui n'ont jamais consulté
SELECT p.nom 
FROM patients p
LEFT JOIN consultations c ON c.patient_id = p.id
WHERE c.patient_id IS NULL

-- Le médecin avec le plus de patients différents