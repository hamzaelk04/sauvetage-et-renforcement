<?php

class Bibliotheque
{
    private $livres = [];
    private $emprunts = [];

    public function __construct($livres)
    {
        $this->livres = $livres;
    }

    public function emprunter($titre, $emprunteur)
    {
        foreach ($this->livres as &$livre) {
            if ($livre['titre'] === $titre && $livre['disponible']) {
                $livre['disponible'] = false;
                $this->emprunts[] = [
                    'titre' => $titre,
                    'emprunteur' => $emprunteur,
                    'date_emprunt' => time(),
                    'date_retour_prevue' => strtotime("+14 days"),
                    'date_retour_effectif' => null,
                    'amende' => 0
                ];
                return;
            }
        }
    }

    public function retourner($titre)
    {
        foreach ($this->emprunts as &$e) {
            if ($e['titre'] === $titre && $e['date_retour_effectif'] === null) {
                $e['date_retour_effectif'] = time();
                $retard = max(0, floor(($e['date_retour_effectif'] - $e['date_retour_prevue']) / 86400));
                $e['amende'] = $retard * 0.5;

                foreach ($this->livres as &$livre) {
                    if ($livre['titre'] === $titre) {
                        $livre['disponible'] = true;
                    }
                }
                return;
            }
        }
    }

    public function getAmendes($emprunteur)
    {
        $total = 0;
        foreach ($this->emprunts as $e) {
            if ($e['emprunteur'] === $emprunteur) {
                $total += $e['amende'];
            }
        }
        return $total;
    }

    public function getStatistiques()
    {
        $disponibles = 0;
        $empruntes = 0;
        $amendes = 0;
        $retards = [];

        foreach ($this->livres as $l) {
            if ($l['disponible'])
                $disponibles++;
            else
                $empruntes++;
        }

        foreach ($this->emprunts as $e) {
            $amendes += $e['amende'];
            if ($e['amende'] > 0) {
                $retards[$e['emprunteur']] = ($retards[$e['emprunteur']] ?? 0) + $e['amende'];
            }
        }

        arsort($retards);
        $plusRetard = key($retards);

        echo "Disponibles: $disponibles\n";
        echo "Empruntés: $empruntes\n";
        echo "Amendes totales: $amendes €\n";
        echo "Plus en retard: $plusRetard\n";
    }
}

$biblio = new Bibliotheque([
    ['titre' => 'Livre1', 'auteur' => 'A', 'disponible' => true],
    ['titre' => 'Livre2', 'auteur' => 'B', 'disponible' => true],
    ['titre' => 'Livre3', 'auteur' => 'C', 'disponible' => true],
]);

$biblio->emprunter('Livre1', 'Alice');
$biblio->emprunter('Livre2', 'Bob');

sleep(1);

$biblio->retourner('Livre1');
$biblio->retourner('Livre2');

echo "Amendes Alice: " . $biblio->getAmendes('Alice') . "€\n";
$biblio->getStatistiques();