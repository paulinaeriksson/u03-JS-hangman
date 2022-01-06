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


//Function to get random word
function random() {
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

    rightWord = dogs[Math.floor(Math.random() * dogs.length)];
    console.log(rightWord);
}

//Function for making input boxes
function createBoxes(){
    random();    
    for (let i = 0; i < rightWord.length; i++) {
        guessed[i] = `<li><input class='box' type='text' disabled value='' id =""/></li>`;   
    }
    
}

//Array with letters (for buttons) 
let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"
]


function start(){
    keyboard();
    createBoxes();
 }

 start();

function keyboard(){
      //Creates keyboard
      for (let i = 0; i < alphabet.length; i++){
        letters = alphabet[i];
        html += `<li><button class="ctrlBtn" onclick="btn" value="${letters}" >${letters}</button>`;
    }
   button.innerHTML = html;
}


function gameEnding() {
    for (i = 0; i < ctrlBtn.length; i++) {
        ctrlBtn[i].disabled = true;
    }

}
//Lägger in knapparnas class="ctrlBtn" från html-dokumentet i en variabel
const ctrlBtn = document.querySelectorAll(".ctrlBtn");

function win() {
    for (let i = 0; i < rightWord.length; i++ ){
    if (rightGuess === rightWord.length){
        guessHtml.innerHTML = "DU VANN!";
        guessHtml.style.color = "green";
        guessHtml.style.fontWeight = "bold";
        guessHtml.style.textTransform = "uppercase";
        gameEnding();
    }
}
}

function loose(){
    for (let i = 0; i < rightWord.length; i++ ){
    if (wrongGuess === 5) {
        guessHtml.innerHTML = "Du förlorade...";
        guessHtml.style.color = "red";
        guessHtml.style.fontWeight = "bold";
        guessHtml.style.textTransform = "uppercase";
        gameEnding();
    }
}}


//Funktion för få ut gissade bokstäver i boxarna, att färga och stänga av varje knapp som använts. 
ctrlBtn.forEach(function disableBtn (btn){
    btn.addEventListener('click', function(event) {
      this.style.background = "darkgray";
      btn.disabled = true;
        const buttonLetter = event.target.value;
        const letterBoxes = document.querySelectorAll("#word > li > input");
//Gets the images of hangman to change with every wrong guess
        if (rightWord.includes(buttonLetter) === false) {
            click = guessHtml.innerHTML--;
            wrongGuess++;
            hngImg.setAttribute("src", `./img/bild${wrongGuess}.png`);

            }

 //Gets the letters out in the boxes
      for (let i = 0; i < rightWord.length; i++ ) {
          if (buttonLetter === rightWord[i]) {
            letterBoxes[i].value = buttonLetter;
            rightGuess++;
          } 
        win();
        loose();
    }  
    
});
 });

document.getElementById("word").innerHTML = guessed.join(" ");
restart = document.getElementById("resetButton");  

function resetBtn(){
    hngImg.setAttribute("src", `./img/bild0.png`);
    wrongGuess = "";
    rightGuess= "";
    guessHtml.style.color = "black";
    random();
    resetGuesses();
    unlockBtns();

   

    

    }

function unlockBtns(){
     for (let i = 0; i < ctrlBtn.length; i++) {
    ctrlBtn[i].disabled = false;
    ctrlBtn[i].style.background = "lightgreen";
    }  
}    

function resetGuesses(){
    for (i = count; i >= count; i-- ){
    document.getElementById("guessCounter").innerHTML = (`${i}`);
    }
}    

function reset() {
    restart.addEventListener('click', resetBtn);
}

 reset();



