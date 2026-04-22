<?php

abstract class Transport
{
    protected $nom;
    protected $vitesse_max;
    protected $capacite_passagers;
    protected $consommation;

    public function __construct($nom, $vitesse, $capacite, $conso)
    {
        $this->nom = $nom;
        $this->vitesse_max = $vitesse;
        $this->capacite_passagers = $capacite;
        $this->consommation = $conso;
    }

    public function tempsTrajet($distanceKm)
    {
        return $distanceKm / $this->vitesse_max;
    }

    abstract public function calculerCoutTrajet($distanceKm, $nbPassagers);

    public function getNom()
    {
        return $this->nom;
    }
}

class Voiture extends Transport
{
    public function __construct()
    {
        parent::__construct("Voiture", 130, 5, 7);
    }

    public function calculerCoutTrajet($distanceKm, $nbPassagers)
    {
        $litres = ($distanceKm / 100) * $this->consommation;
        $cout = $litres * 1.8;
        return $cout / $nbPassagers;
    }
}

class Train extends Transport
{
    public function __construct()
    {
        parent::__construct("Train", 300, 500, 30);
    }

    public function calculerCoutTrajet($distanceKm, $nbPassagers)
    {
        $kwh = ($distanceKm / 100) * $this->consommation;
        $cout = $kwh * 0.15;
        return $cout / $nbPassagers;
    }
}

class Avion extends Transport
{
    public function __construct()
    {
        parent::__construct("Avion", 900, 180, 250);
    }

    public function calculerCoutTrajet($distanceKm, $nbPassagers)
    {
        $litres = ($distanceKm / 100) * $this->consommation;
        $cout = $litres * 2.5;
        return $cout / $nbPassagers;
    }
}

$distance = 775;
$passagers = 4;

$transports = [
    new Voiture(),
    new Train(),
    new Avion()
];

$plusRapide = null;
$moinsCher = null;
$minTemps = PHP_FLOAT_MAX;
$minCout = PHP_FLOAT_MAX;

foreach ($transports as $t) {
    $temps = $t->tempsTrajet($distance);
    $cout = $t->calculerCoutTrajet($distance, $passagers);

    echo $t->getNom() . " : Temps = " . round($temps, 2) . "h, Coût/personne = " . round($cout, 2) . "€\n";

    if ($temps < $minTemps) {
        $minTemps = $temps;
        $plusRapide = $t->getNom();
    }

    if ($cout < $minCout) {
        $minCout = $cout;
        $moinsCher = $t->getNom();
    }
}

echo "Plus rapide : $plusRapide\n";
echo "Moins cher : $moinsCher\n";