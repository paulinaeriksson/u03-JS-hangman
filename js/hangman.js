/// VARIABLER ///

//Variabel för button.innerHTML
let html = ``;
//Variabel för ordet (hundrasen) man ska gissa på
let rightWord = "";
//Variabel för max antal felgissningar
let maxWrong = 10;
//Variabel för räknade klick
let guessCounter = "";
//Variabel för id:t där det gissade ordet hamnar.
let word = null;
//Array för gissade 
let guessed = [];
//Variabel för bokstäver
let letters = "";
//Variabel för bokstavsknapparna, onclick.
let btn = "";
//Variabel för spela igen-knappen
let resetButton = "";
//Variabel för bokstäverna som blir över efter att man har gissat
let leftoverLetters;
let count = 0;

//Variabel som lagrar data för hur många ggr man har klickat på bokstäverna
let pressed = "";
let guess = prompt;
let splitRightWord = [];
let index = "";
let restart = "";

///ARRAYER///

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
];

//Array med bilder
let hngImg = document.getElementById("hangman");

let hangmanImgArray = [
    "./img/bild1.png",
    "./img/bild2.png",
    "./img/bild3.png",
    "./img/bild4.png",
    "./img/bild5.png",
    "./img/bild6.png",
    "./img/bild7.png",
    "./img/bild8.png",
    "./img/bild9.png",
    "./img/bild10.png",
];



/*let imageIndex = 0;
document.querySelectorAll('.ctrlBtn').forEach(function(btn){
    btn.addEventListener('click', function() {
        for (let y = 0; y < hangmanImgArray.length; y++) {
           hngImg.innerHTML = hangmanImgArray[y];
        }
    })})*/



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

//Funktion för att färga och stänga av varje knapp som använts. 
ctrlBtn.forEach(function disableBtn (btn){
    btn.addEventListener('click', function() {
      this.style.background = "darkgray";
      btn.disabled = true;
    });
  });

//Räknar antal klick på bokstäverna till "Antal gissningar"
ctrlBtn.forEach(function clickCount (btn){
    btn.addEventListener('click', function() {
        document.getElementById("guessCounter").innerHTML++;
    })})


/*ctrlBtn.forEach(function displayImgs() {
    btn.addEventListener("click", function() {
        document.getElementById("hangman").src= hangmanImgArray[4];
    })
    
});*/

    
//En loop för att dölja ordet som ska gissas fram. 
for (let i = 0; i < rightWord.length; i++) {
    guessed[i] = "_";
    console.log(guessed);
    document.getElementById("word").innerHTML = guessed;
}
  
document.getElementById("word").innerHTML = guessed.join(" ");
leftoverLetters = rightWord.length;



//Tar fram index för bokstaven (inte bara första )
    ctrlBtn.forEach(function getLetterIndex (btn){
    btn.addEventListener('click', function() {

    for (index = rightWord.indexOf(btn.innerHTML); index > -1; index = rightWord.indexOf(btn.innerHTML, index+1)){
    console.log(index);
}
  }  )
})
  
document.getElementById("word").innerHTML = guessed.join(" ");
leftoverLetters = rightWord.length;




//Gör en array av rightWord
/*splitRightWord = Array.from(rightWord);
console.log(Array.from(splitRightWord));
*/






//Test på funktion som visar bokstäverna i det dolda ordet
/*document.querySelectorAll('.ctrlBtn').forEach(function(btn){
    btn.addEventListener('click', function() {
     
        let guess = (rightWord.includes(btn.innerHTML))
        let noOfTimes = rightWord.split(btn.innerHTML).length -1;
        let hiddenWord = document.getElementById("word").innerHTML;

        if (guess === true) {
                        
          //console.log(rightWord.indexOf(btn.innerHTML));
           console.log(`${btn.innerHTML} finns med i ordet ${noOfTimes} gånger`);
       } else {
           console.log(`${btn.innerHTML} finns inte med i ordet`);
       };
       
     
    });
  });
  



  

//Funktion nollställer antal gissningar
    restart = document.getElementById("resetButton").addEventListener("click", function() {
        //Nollställer antal gissningar 
        document.getElementById("guessCounter").innerHTML = (""); 
        
    })

//Test för att visa bokstäverna
function displayGame(){
for (let i = 0; i = rightWord.length; i++) {
    console.log(guessed[i] = " _ ");
 
}

//let leftoverLetters = rightWord.length;
}*/

/*count();*/
//displayWord(); 