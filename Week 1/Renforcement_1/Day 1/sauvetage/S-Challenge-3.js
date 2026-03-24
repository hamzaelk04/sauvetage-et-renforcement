let firstname = [
    'Alice',
    'Bob',
    'Hamza',
    'Mehdi',
    'Rachid',
    'Ali'
];

for(let i = 0; i < firstname.length; i++){
    console.log(i+1, ".", firstname[i] );
}

for(let i = 0; i < firstname.length; i++){
    if(firstname[i].length > 4){
        console.log(firstname[i]);
    }
}