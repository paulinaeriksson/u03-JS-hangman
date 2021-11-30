/// VARIABLER ///

//Variabel för button.innerHTML
let html = ``;
//Variabel för ordet (hundrasen) man ska gissa på
let rightWord = "";
//Variabel för max antal felgissningar
let maxWrong = 6;
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
//Variabel för bokstäverna som blir över efter att man har gissat
let wrongGuess = 0;
let rightGuess = 0;
let count = 6;

//Variabel som lagrar data för hur många ggr man har klickat på bokstäverna
let pressed = "";

let splitRightWord = [];
let index = "";
let restart = "";
//Variabel för bokstäverna i ordet man ska gissa på
let hiddenLetter = "";
//let letterRightWord = "";
let imgValue = "";
let img = [];
let imgContainer = "";
let buttonValue = "";
let click ="";

///ARRAYER///

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

//Array med bilder
const hngImg = document.getElementById("hangman");
/*
let hangmanImgArray = [
    "./img/bild1.png",
    "./img/bild2.png",
    "./img/bild3.png",
    "./img/bild4.png",
    "./img/bild5.png",
    "./img/bild6.png",
  
];*/





function random() {
    rightWord = dogs[Math.floor(Math.random() * dogs.length)];
}

//Anropar random
random();
//Test för att se ordet som ska gissas i konsolen
console.log(rightWord);

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
//Gör button-elementen synliga i html-dokumentet
button.innerHTML = html;

//Lägger in knapparnas class="ctrlBtn" från html-dokumentet i en variabel
let ctrlBtn = document.querySelectorAll(".ctrlBtn");


//Funktion för få ut gissade bokstäver i boxarna, att färga och stänga av varje knapp som använts. 
ctrlBtn.forEach(function disableBtn (btn){
    btn.addEventListener('click', function(event) {
      this.style.background = "darkgray";
      btn.disabled = true;
    
      const buttonLetter = event.target.value;

        const letterBoxes = document.querySelectorAll("#word > li > input");
        
        if (rightWord.includes(buttonLetter) === false) {
            click = document.getElementById("guessCounter").innerHTML--;
            wrongGuess++;
            hngImg.setAttribute("src", `./img/bild${wrongGuess}.png`);

            }

      for (let i = 0; i < rightWord.length; i++ ) {
            //Få ut bokstäverna i boxarna
          if (buttonLetter === rightWord[i]) {
            letterBoxes[i].value = buttonLetter;
            rightGuess++;
            //FÖRLORAT
          } else if (wrongGuess === 5) {
              console.log("du förlorade");
          } 

    }
         if (rightGuess === rightWord.length) {
        console.log("du vann");
    }
});
  });

  function checkIfWon () {
      for  (let i = 0; i < word.children.length; i++) {
            let value = true;
          if (word.children.length[i].textContent === '') {
              value = false;
              console.log("du vann");
          }
      }
  }
/*
//Räknar antal klick på bokstäverna till "Antal gissningar"
ctrlBtn.forEach(function clickCount (btn){
    btn.addEventListener('click', function() {
        if (rightWord.includes(buttonLetter) === false) {
        click = document.getElementById("guessCounter").innerHTML--;
        }
    })})*/

// Gör en array med bokstäver av det gissade ordet för att kunna få ut bokstäverna i boxarna.
splitRightWord = rightWord.split(""); 

//En loop för skapa boxarna för bokstäverna i ordet som ska gissas. Loopar även arrayen för det gissade ordet så de hamnar i boxarna.
for (let i = 0; i < rightWord.length; i++) {
    guessed[i] = `<li><input class='box' type='text' disabled value='-' id =""/></li>`;
      
}

    
for (let j = 0; j < rightWord.length; j++) {
    splitRightWord = rightWord[j];
   
    //console.log(splitRightWord + index);
    //console.log(guessed);
}



  
document.getElementById("word").innerHTML = guessed.join(" ");
leftoverLetters = rightWord.length;

restart = document.getElementById("resetButton");




  
  ctrlBtn.forEach(function(btn){
    btn.addEventListener('click', function test() { 

        for (i = 0; i < splitRightWord; i ++); {

        }
    })})


console.log(index);
  

//Funktion nollställer antal gissningar
    restart = document.getElementById("resetButton").addEventListener ("click", function() {
        //Nollställer antal gissningar 


        for (i = count; i >= count; i-- ){

        document.getElementById("guessCounter").innerHTML = (`${i}`);
        
    
        }
    })
        
    
    /*//Separat funktion för eventlistener
    function setEventListener (event) {
        btn.addEventListener("click");
    }
    

*/

//buttonValue = button.value;
    
//Loop som delar upp bilderna från arrayen
/*
for (let i = 0; i < hangmanImgArray.length; i++) {
    imgValue = imgContainer.value;
    img = hangmanImgArray[i];*/
   // document.getElementById("img-container").innerHTML = `<img src="${img}" id="hangman">`;
    

   /* if (imgValue === buttonValue)
    console.log("det var sant");
    document.getElementById("img-container").innerHTML = `<img src="${img}" id="hangman">`;
    
    console.log(img);*/


//Test 
/*
ctrlBtn.forEach(function(btn){
    btn.addEventListener('click', function display() { 
       
        if (rightWord.includes(btn.value))
            console.log("hej");
            
        
    }
    
    )
  }
)*/
    


//let removedLetters2 = splitRightWord.splice(index, 1);
//console.log(splitRightWord);

//let leftoverLetters = rightWord.length;


/*count();*/
//displayWord(); 


//document.getElementById("word").value = guessed.join(" ");
//leftoverLetters = rightWord.length;

/*let imageIndex = 0;
document.querySelectorAll('.ctrlBtn').forEach(function(btn){
    btn.addEventListener('click', function() {
        for (let y = 0; y < hangmanImgArray.length; y++) {
           hngImg.innerHTML = hangmanImgArray[y];
        }
    })})*/

//En loop för att skapa en array 
/*for (let i = 0; i < splitRightWord.length; i++) { 
        letterRightWord = splitRightWord[i]
}*/
/*
//Tar fram index för bokstaven (inte bara första )
    ctrlBtn.forEach(function getLetterIndex (btn){
    btn.addEventListener('click', function() {

    for (index = rightWord.indexOf(btn.value); index > -1; index = rightWord.indexOf(btn.value, index+1)){
    console.log(index);
}
  }  )
})*/

//Funktion nollställer antal gissningar
/*restart.addEventListener("click", function resetButton () {
    if (restart.innerText ="Starta") {
        restart.innerText = "Spela igen";
    }
        else {
        restart.innerText = "Starta";
    }
    document.getElementById("guessCounter").innerHTML = (""); 
})*/




//Test få fram om bokstav finns med eller ej 
