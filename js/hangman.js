/// VARIABLER ///

//Variabel for button.innerHTML
let html = ``;
//Variable for selected word 
let rightWord = "";
//Variabel for max wrong guesses
let maxWrong = 5;
//Variabel to count clicks
let guessCounter = "";
//Variabel for id where guessed word gets stored
let word = null;
//Array for guesses
let guessed = [];
//Variabel for the letters of the alphabet array
let letters = "";
//Variabel for keyboard buttons, onclick.
let btn = "";
//Variabel for the reset button
let resetButton = "";
//Variabel for wrong guesses
let wrongGuess = 0;
//Varibel for right guesses
let rightGuess = 0;
//Variable for the number of guesses the player got
let count = 6;
let restart = "";
//Variabel for letters in selected word
let hiddenLetter = "";
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
}

random();
//Function for making input boxes
function createBoxes(){

    for (let i = 0; i < rightWord.length; i++) {
        guessed[i] =  `<li><input class='box' type='text' placeholder='_' disabled value='' id =""/></li>`;  
    }   
}

//Array with letters (for buttons) 
let alphabet = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"
]



    keyboard();

//Function to create keyboard
function keyboard(){

      for (let i = 0; i < alphabet.length; i++){
        letters = alphabet[i];
        html += `<li><button class="ctrlBtn" onclick="btn" value="${letters}" >${letters}</button>`;
    }
   button.innerHTML = html;
}

//Function to lock all keys when game ends
function gameEnding() {
    for (i = 0; i < ctrlBtn.length; i++) {
        ctrlBtn[i].disabled = true;
    }

}

//Variable with keyboard buttons in html
const ctrlBtn = document.querySelectorAll(".ctrlBtn");

//Function to check if won
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

//Function to check if lost
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


//Function to get guessed letters out in the boxes, change and disable each button being used
ctrlBtn.forEach(function disableBtn (btn){
    btn.addEventListener('click', function test(event) {
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

}) 
 });

//Function to create boxes
createBoxes();
    document.getElementById("word").innerHTML = guessed.join(" ");
    restart = document.getElementById("resetButton");  

//Reset function
function resetBtn(){
    hngImg.setAttribute("src", `./img/bild0.png`);
    wrongGuess = "";
    rightGuess= "";
    guessHtml.style.color = "black";

    random();
    guessed =[];
    resetGuesses();
    unlockBtns();
    createBoxes();

    document.getElementById("word").innerHTML = guessed.join(" ");

    }

//Function to unlock keyboard
function unlockBtns(){
     for (let i = 0; i < ctrlBtn.length; i++) {
    ctrlBtn[i].disabled = false;
    ctrlBtn[i].style.background = "lightgreen";
    }  
}    

//Function to reset guess counter
function resetGuesses(){
    for (i = count; i >= count; i-- ){
    document.getElementById("guessCounter").innerHTML = (`${i}`);
    }
}    

function reset() {
    restart.addEventListener('click', resetBtn);
}

 reset();


