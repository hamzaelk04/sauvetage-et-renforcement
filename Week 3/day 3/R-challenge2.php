<?php

abstract class Employe
{
    protected $nom;
    protected $prenom;
    protected $date_embauche;
    protected $salaire_base;

    public function __construct($nom, $prenom, $date, $salaire)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->date_embauche = $date;
        $this->salaire_base = $salaire;
    }

    public function anciennete()
    {
        $date = new DateTime($this->date_embauche);
        $now = new DateTime();
        return $now->diff($date)->y;
    }

    abstract public function calculerSalaire();

    public function getType()
    {
        return get_class($this);
    }

    public function getNomComplet()
    {
        return $this->prenom . " " . $this->nom;
    }
}

class Developpeur extends Employe
{
    public function calculerSalaire()
    {
        $anciennete = $this->anciennete();
        $salaire = $this->salaire_base + ($anciennete * 500);
        if ($anciennete > 5) {
            $salaire += $this->salaire_base * 0.1;
        }
        return $salaire;
    }
}

class Commercial extends Employe
{
    private $ca_mensuel;
    private $taux;

    public function __construct($nom, $prenom, $date, $salaire, $ca, $taux)
    {
        parent::__construct($nom, $prenom, $date, $salaire);
        $this->ca_mensuel = $ca;
        $this->taux = $taux;
    }

    public function calculerSalaire()
    {
        return $this->salaire_base + ($this->ca_mensuel * $this->taux);
    }
}

class Manager extends Employe
{
    private $taille_equipe;

    public function __construct($nom, $prenom, $date, $salaire, $taille)
    {
        parent::__construct($nom, $prenom, $date, $salaire);
        $this->taille_equipe = $taille;
    }

    public function calculerSalaire()
    {
        $salaire = $this->salaire_base + ($this->taille_equipe * 200);
        if ($this->taille_equipe > 10) {
            $salaire += $salaire * 0.15;
        }
        return $salaire;
    }
}

$employes = [
    new Developpeur("A", "Ali", "2015-01-01", 3000),
    new Developpeur("B", "Sara", "2019-01-01", 2800),

    new Commercial("C", "Omar", "2020-01-01", 2500, 10000, 0.05),
    new Commercial("D", "Lina", "2018-01-01", 2600, 15000, 0.04),

    new Manager("E", "Yassine", "2010-01-01", 4000, 12),
    new Manager("F", "Nora", "2016-01-01", 3800, 8),
];

$total = 0;
$maxSalaire = 0;
$best = null;

$stats = [];

foreach ($employes as $e) {
    $s = $e->calculerSalaire();
    $type = $e->getType();

    $total += $s;

    if ($s > $maxSalaire) {
        $maxSalaire = $s;
        $best = $e;
    }

    if (!isset($stats[$type])) {
        $stats[$type] = ['total' => 0, 'count' => 0];
    }

    $stats[$type]['total'] += $s;
    $stats[$type]['count']++;
}

echo "Masse salariale: $total €\n";
echo "Meilleur employé: " . $best->getNomComplet() . " ($maxSalaire €)\n";

foreach ($stats as $type => $data) {
    echo "$type moyenne: " . ($data['total'] / $data['count']) . " €\n";
}