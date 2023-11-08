var highscoresEl = document.querySelector("#highscores");
var clearEl = document.querySelector("#clear");
var initial = localStorage.getItem("initials");
var score = localStorage.getItem("score");

// Showing the initials and score
highscoresEl.textContent = initial + " - " + score;

// Reset Highscore
function clearInput(){
    highscoresEl.textContent = " ";
}    
clearEl.addEventListener("click", clearInput);



    