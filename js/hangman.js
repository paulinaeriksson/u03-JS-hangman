//Array med hundraser
let dogs = [
    "dalmatiner",
    "labrador",
    "labradoodle",
    "pudel",
    "schäfer",
    "tax",
    "dobermann",
    "pomeranian",
    "chihuahua"
]

let answer = '';
let maxWrong = 10;
let mistakes = 0;
let guessed = [];



//Funktion för att slumpa fram ord (hundras). Multiplicera med längden på arrayen för att en ny hundras ska slumpas fram varje gång.
function random(){
    answer = dogs[Math.floor(Math.random() * dogs.length)];
    alert(answer);
}

random();