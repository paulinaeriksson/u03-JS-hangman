/// VARIABLER ///

//Variabel för button.innerHTML
let html = ``;
//Variabel för ordet (hundrasen) man ska gissa på
let rightWord = "";
//Variabel för max antal felgissningar
let maxWrong = 5;
//Variabel för räknade klick
let guessCounter = "";
//Variabel för id:t där det gissade ordet hamnar.
let word = null;
//Array för gissade 
let guessed = [];
//Variabel för bokstäverna  alphabet-arrayen
let letters = "";
//Variabel för bokstavsknapparna, onclick.
let btn = "";
//Variabel för spela igen-knappen
let resetButton = "";
//Variabel för antal klick på fel bokstav
let wrongGuess = 0;
//Varibel för antal klick på rätt bokstav
let rightGuess = 0;
//Hur många försök man har att gissa
let count = 6;
let restart = "";
//Variabel för bokstäverna i ordet man ska gissa på
let hiddenLetter = "";
//let letterRightWord = "";
let imgContainer = "";
let buttonValue = "";
let click ="";
const guessHtml = document.getElementById("guessCounter");
const hngImg = document.getElementById("hangman");


//Array med hundraser
const dogs = [
    "dalmatiner",
    "labrador",
    "labradoodle",
    "pudel",
    "schäfer",
    "tax",
    "dobermann",
    "pomeranian",
    "chihuahua"
];



function random() {
    rightWord = dogs[Math.floor(Math.random() * dogs.length)];
}



/// SPELPLAN ///

//Array med bokstäver (för knapparna) 
let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"
]

//Skapa knapparna med onclick-funktion. Tar variabeln html och lägger till html-kod för varje (forEach) bokstav.
alphabet.forEach(function createLetters(letters){
    html += `<li><button class="ctrlBtn" onclick="btn" value="${letters}"" >${letters}</button>`
})
button.innerHTML = html;



//Lägger in knapparnas class="ctrlBtn" från html-dokumentet i en variabel
const ctrlBtn = document.querySelectorAll(".ctrlBtn");

function gameEnding() {
    for (i = 0; i < ctrlBtn.length; i++) {
        ctrlBtn[i].disabled = true;
        document.getElementById("guessCounter").innerHTML = "Du förlorade!";
    }
}



//Funktion för få ut gissade bokstäver i boxarna, att färga och stänga av varje knapp som använts. 
ctrlBtn.forEach(function disableBtn (btn){
    btn.addEventListener('click', function(event) {
      this.style.background = "darkgray";
      btn.disabled = true;
    
      const buttonLetter = event.target.value;

        const letterBoxes = document.querySelectorAll("#word > li > input");
        
        //
        if (rightWord.includes(buttonLetter) === false) {
            click = guessHtml.innerHTML--;
            wrongGuess++;
            hngImg.setAttribute("src", `./img/bild${wrongGuess}.png`);

            }

      for (let i = 0; i < rightWord.length; i++ ) {
            //Få ut bokstäverna i boxarna
          if (buttonLetter === rightWord[i]) {
            letterBoxes[i].value = buttonLetter;
            rightGuess++;
            //FÖRLUST
          } else if (wrongGuess === 5) {
            guessHtml.innerHTML = "Du förlorade...";
            guessHtml.style.color = "red";
            guessHtml.style.fontWeight = "bold";
            guessHtml.style.textTransform = "uppercase";
            gameEnding();
          } 

    }   //VINST
         if (rightGuess === rightWord.length) {
            guessHtml.innerHTML = "Du vann!";
            guessHtml.style.color = "green";
            guessHtml.style.fontWeight = "bold";
            guessHtml.style.textTransform = "uppercase";
            gameEnding();
    }
});
  });

  //Anropar random - fylttas till en startfunktion
random();


//En loop för skapa boxarna för bokstäverna i ordet som ska gissas. Loopar även arrayen för det gissade ordet så de hamnar i boxarna.
for (let i = 0; i < rightWord.length; i++) {
    guessed[i] = `<li><input class='box' type='text' disabled value='-' id =""/></li>`;     
}


document.getElementById("word").innerHTML = guessed.join(" ");
restart = document.getElementById("resetButton");  


//Funktion nollställer antal gissningar och låser upp bokstavsknapparna
document.getElementById("resetButton").addEventListener ("click", function reset() {
    
for (let i = 0; i < ctrlBtn.length; i++) {
    ctrlBtn[i].disabled = false;
}  
    for (i = count; i >= count; i-- ){
    document.getElementById("guessCounter").innerHTML = (`${i}`);

    }
})

