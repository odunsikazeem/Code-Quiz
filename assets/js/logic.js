// Targeting elements through id's by using query selector
var count = 0
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
var timer = 15;
var interval;
// Checking if selected option is the same as correct answer
function answer(selectedOption) {
   if (selectedOption === questions[count].answer) {
       score++;
       feedbackEl.textContent = "Correct!";
   } else {
       feedbackEl.textContent = "Wrong!";
   // Timer for deduction if feedback is wrong
       timer = timer - 2;
   }
   count++;
   // Checking if there are more questions 
   if (count < questions.length) {
       displayQuestion();
   } else {
       // Quiz is over, display the final score and end screen
       endQuiz();
       clearInterval(interval)
   }
}

// This function displays the current question
function displayQuestion() { 
   qestTitleEl.textContent = questions[count].question;
   // Clear the previous choices
   choicesEl.innerHTML = "";

   // Create and append answer choices
   for (var i = 0; i < questions[count].options.length; i++) {
       var choiceButton = document.createElement("button");
       choiceButton.textContent = questions[count].options[i];
       choiceButton.addEventListener("click", function () {
           answer(this.textContent);
       });
       choicesEl.appendChild(choiceButton);
   }
}
//  Function to start the quiz
function startQuiz() {
   startScreen.style.display = "none";
   questionEl.classList.remove("hide");
   feedbackEl.classList.remove("hide");
   displayQuestion(); 
   setTimer();
}
// Function to handle the submission of the user's score and initials 
function saveInitials() {
   localStorage.setItem("initials", initialsEl.value);
   localStorage.setItem("score", score);
   location.href = "/highscores.html"
}
// Function to handle setTimer and clear interval
function setTimer() {
   timeEl.textContent = timer;
   
   interval = setInterval(() => {
    timer = timer - 1 ;
    if (timer > -1) {
      timeEl.textContent = timer; 
    } else {
      timeEl.textContent = 0;
      clearInterval(interval);
      endQuiz();
    }
   }, 1000); 
}
// Function to end Quiz
function endQuiz () {
   endscreenEl.classList.remove("hide");
   finalscoreEl.textContent = "" + score;
   questionEl.style.display = "none";  
}  
// Attach a click event to your "start" button/element
startEl.addEventListener("click", startQuiz);
  
// Attach a click event to your "submit" button/element
 submitEl.addEventListener("click", saveInitials);

