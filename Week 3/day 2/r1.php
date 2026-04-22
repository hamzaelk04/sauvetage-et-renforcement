<?php

class Distributeur {
    private $produits = [];
    private $caisse = 0;

    public function __construct($produits) {
        $this->produits = $produits;
    }

    public function afficherProduits() {
        foreach ($this->produits as $p) {
            echo $p['nom'] . " - " . $p['prix'] . "€ (Stock: " . $p['stock'] . ")\n";
        }
    }

    public function acheter($nomProduit, $montantInsere) {
        foreach ($this->produits as &$p) {
            if ($p['nom'] === $nomProduit) {
                if ($p['stock'] <= 0) {
                    echo "Rupture de stock\n";
                    return $montantInsere;
                }
                if ($montantInsere < $p['prix']) {
                    echo "Montant insuffisant\n";
                    return $montantInsere;
                }
                $p['stock']--;
                $this->caisse += $p['prix'];
                return $montantInsere - $p['prix'];
            }
        }
        echo "Produit introuvable\n";
        return $montantInsere;
    }

    public function remplir($nomProduit, $quantite) {
        foreach ($this->produits as &$p) {
            if ($p['nom'] === $nomProduit) {
                $p['stock'] += $quantite;
            }
        }
    }

    public function getRecette() {
        return $this->caisse;
    }
}

$distributeur = new Distributeur([
    ['nom' => 'Coca', 'prix' => 1.5, 'stock' => 3],
    ['nom' => 'Fanta', 'prix' => 1.2, 'stock' => 2],
    ['nom' => 'Sprite', 'prix' => 1.3, 'stock' => 0],
    ['nom' => 'Eau', 'prix' => 1.0, 'stock' => 5],
    ['nom' => 'Jus', 'prix' => 2.0, 'stock' => 1],
]);

$distributeur->afficherProduits();

$distributeur->acheter('Coca', 2);
$distributeur->acheter('Fanta', 1);
$distributeur->acheter('Sprite', 2);
$distributeur->acheter('Eau', 1);
$distributeur->acheter('Jus', 1);
$distributeur->acheter('Jus', 3);
$distributeur->acheter('Inconnu', 2);
$distributeur->acheter('Coca', 1.5);

echo "Recette: " . $distributeur->getRecette() . "€\n";