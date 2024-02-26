const result = document.getElementById("resultTxt");
const flipBtn = document.getElementById("flipBtn");

let headsScoreDisplay = document.getElementById("headsScoreNumber");
let tailsScoreDisplay = document.getElementById("tailsScoreNumber");
let headsScore = 0;
let tailsScore = 0;


function coinFlip() {
    let randomNumber = Math.floor((Math.random() * 10) + 1); // Store pseudo-random number between 0 & 11 in variable
    if (randomNumber >= 5) { // If greater than 5, result is tails
        result.innerHTML = "Heads" 
        headsScore ++; // Add score to heads
        headsScoreDisplay.innerHTML = headsScore; //Display score
    } else {
        result.innerHTML = "Tails"
        tailsScore ++;
        tailsScoreDisplay.innerHTML = tailsScore;
    }
    
}; 

flipBtn.addEventListener("click", coinFlip); 



