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

let rightWord = "";
let guessCounter = 10;
let word = null;
let guessed = [];
let letters = "";
let btn = "";

//Array med bokstäver (för knapparna) 
let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"
]

//Funktion för att slumpa fram ord (hundras). Multiplicera med längden på arrayen för att en ny hundras ska slumpas fram varje gång.
function random() {
    rightWord = dogs[Math.floor(Math.random() * dogs.length)];
}
//Anropar random
random();

//Funktion som visar ordet med _ på skärmen genom att dela rightWord, .join tar bort kommatecken mellan varje dold bokstav.
function displayWord() {
    document.getElementById("word").innerHTML = rightWord.split("").map(letter => (guessed.indexOf(letter)) >= 0 ? letter : " _ ").join("");
}

//Ändrar texten vid elementet med id numberOfGuesses till maxWrong (dvs räknar hur många gissningar som är kvar)
function count () {
document.getElementById("guessCounter").innerHTML = guessCounter;

}

//Skapa knapparna med onclick-funktion. Tar variabeln html och lägger till html-kod för varje (forEach) bokstav.
let html = ``;
alphabet.forEach(function(letters){
    html += `<li><button class="ctrlBtn" onclick="btn" >${letters}</button>`
})
//Gör elementen synliga i html-dokumentet
button.innerHTML = html;
let click = 0;
//Funktion för att färga varje knapp som använts. 
document.querySelectorAll('.ctrlBtn').forEach(function(btn){
    btn.addEventListener('click', function() {
      this.style.background = "darkgray";
    });
  });

//Funktion för gissade ord

 

//Funktion för att starta om spelet
function reset () {

}
count();
displayWord();