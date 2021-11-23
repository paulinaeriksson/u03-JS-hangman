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

let answer = "";
let maxWrong = 10;
let mistakes = 0;
let word = null;
let guessed = [];
let letters = "";

let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"
]

//Funktion för att slumpa fram ord (hundras). Multiplicera med längden på arrayen för att en ny hundras ska slumpas fram varje gång.
function random(){
    answer = dogs[Math.floor(Math.random() * dogs.length)];
}


random();

//Ändrar texten vid elementet med id numberOfGuesses till maxWrong (dvs räknar hur många gissningar som är kvar)
document.getElementById("wrongGuesses").innerHTML = maxWrong;

//Funktion som ändrar färg när knapparna trycks. Querey letar efter elementet
function clickedLetter() {
    document.quereySelector('#a').style.color = "red";
}


//Skapa knapparna
let html = ``;
alphabet.forEach(function(letters){
    html += `<li><button>${letters}</button>`
})
console.log(html);
button.innerHTML = html;