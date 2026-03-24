let notes = [12, 8, 15, 6, 18, 9, 14];

let sum = 0;
let mean = 0;
let max = notes[0];
let min = notes[0];

for (let i = 0; i < notes.length; i++) {
    sum += notes[i];
    
    mean = sum / notes.length;

    if (max < notes[i]) {
        max = notes[i];
    }

    if (min > notes[i]) {
        min = notes[i];
    }
}

console.log("sum = ", sum);

console.log("mean = ", mean);

console.log("max = ", max);

console.log("min = ", min);
