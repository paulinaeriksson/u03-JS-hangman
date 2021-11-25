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
let maxWrong = 10;
let guessCounter = "";
let word = null;
let guessed = [];
let letters = "";
let btn = "";
let reset = "";

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

//Skapa knapparna med onclick-funktion. Tar variabeln html och lägger till html-kod för varje (forEach) bokstav.
let html = ``;
alphabet.forEach(function(letters){
    html += `<li><button class="ctrlBtn" onclick="btn" >${letters}</button>`
})
//Gör button-elementen synliga i html-dokumentet
button.innerHTML = html;

//Funktion för att färga och stänga av varje knapp som använts. 
document.querySelectorAll('.ctrlBtn').forEach(function(btn){
    btn.addEventListener('click', function() {
      this.style.background = "darkgray";
      btn.disabled = true;
    });
  });

  //Ändrar texten vid elementet med id numberOfGuesses (dvs räknar klick)
function count () {
    document.getElementById("guessCounter").innerHTML = guessCounter;
        }
    

//Funktion för ränkaren av antal klick. 
document.querySelectorAll('.ctrlBtn').forEach(function(btn){
    btn.addEventListener('click', function() {
        document.getElementById("guessCounter").innerHTML++;
    });
  });



//Funktion för vinst
//Funktion för förlust
  

//Funktion nollställer antal gissningar
function restart() {
    document.getElementById("resetButton").addEventListener("click", function() {
        //Nollställer antal gissningar 
        document.getElementById("guessCounter").innerHTML = ("");
      ;
    })
}


/*count();*/
displayWord();