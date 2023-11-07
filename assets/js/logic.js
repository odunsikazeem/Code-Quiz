// * A start button that when clicked a timer starts and the first question appears.
var count = 0;
var score = 0;
var startEl = document.querySelector("#start");
var questionEl = document.querySelector("#questions");
var qestTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var startScreen = document.querySelector("#start-screen");
var endscreenEl = document.querySelector("#end-screen");
var finalscoreEl = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");
var submitEl = document.querySelector("#submit");
var timeEl = document.querySelector("#time");
var feedbackEl = document.querySelector("#feedback");

 function answer() {
     
        }
        
 
 
//   * Questions contain buttons for each answer.
//   * 
//   * When answer is clicked, the next question appears
//   * 
//   * If the answer clicked was incorrect then subtract time from the clock

// * The quiz should end when all questions are answered or the timer reaches 0.

//   * When the game ends, it should display their score and give the user the ability to save their initials and their score

// Add event listener to generate button
startEl.addEventListener('click', answer);