let names = [
    'name 1',
    'name 2',
    'name 3',
    'name 4',
    'name 5',
    'name 6'
];

names.forEach(name => {
    console.log(name);
})
console.log("Le premier inscrit: " + names[0]);

console.log("Le dernier inscrit: " + names[names.length - 1]);

console.log(names.length);

names.push('name 7', 'name 8');

let deleted = names.pop();

console.log('Lelement retire est: '+ deleted);

names.shift();

console.log("La liste finale:" + names);