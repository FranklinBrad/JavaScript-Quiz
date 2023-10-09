/*
  1. Be thinking about how an array of objects might be very useful here
  2. Use functions to control the overflow flow of things 
  3. No questions/answers in the HTML
  4. How can we generate each new question and its answers on demand 
  5. How can we keep track of which question is on-screen
  6. Get the quiz to work with 1-2 questions
  7. Make the timer value very high to begin with
  8. Console.log whatever you need for testing
*/

var startBtn = document.querySelector(".start-button");
var timerCount = document.querySelector(".timer-count");
var questionArea = document.querySelector(".questions")
var answerFeedback = document.querySelector("#answer-feedback")
var highScoreContainer = document.querySelector("#highscore")
var headerContainer = document.querySelector("#header")
var scoreBoardEl = document.querySelector("#scoreboard")
var correctAnswers = document.querySelector("#correct-answers")
var timerContainer = document.querySelector(".card-timer")

var timerSec = 60;
var currQuestionIdx = 0;




var correctAns = 0
var incorect = 0

var questions = [
  {
    question: "What is the best football team?",
    answers: [ "Green Bay Packers", "Chicago Bears", "Minnesota Vikings", "Detroit Lions" ],
    correct: "Minnesota Vikings"
  },
  {
    question: "What is the best baseball team?",
    answers: [ "aaaa", "bbbb", "cccc", "dddd" ],
    correct: "aaaa"
  },
  
]

var timerInterval;

function start() {

  //var timerInterval = setInterval(function () {
    timerInterval = setInterval(function () {
    timerSec--;
    timerCount.textContent = timerSec;
    if (timerSec === 0) {
      timerCount.textContent = 0;
      clearInterval(timerInterval)
      questionArea.style.display = "none"
      highScoreContainer.style.display = "block"
      // determine if the user won the game or not
    }

  }, 1000);

  displayQuestion();
}

// This function gets the current question from the array and displays it on the screen
function displayQuestion(){
  // clear out anything already in the div tag
 headerContainer.style.display = "none"
questionArea.style.display = "block"
 questionArea.innerHTML = ""
  var currQuestion = questions[currQuestionIdx]
  var pTag = document.createElement("p");
  pTag.textContent = currQuestion.question;
  questionArea.appendChild(pTag)

  for( var i = 0; i < currQuestion.answers.length; i++ ){
    var answer = currQuestion.answers[i]
    var btn = document.createElement("button")
    btn.textContent = answer
    questionArea.appendChild(btn)
  }

}


function answerIsCorrect(){

  
}

function answerIsWrong(){



}



questionArea.addEventListener("click", function(event){
  var currQuestion = questions[currQuestionIdx]
  currQuestionIdx++
  
  if (currQuestionIdx === questions.length) {
    questionArea.style.display = "none"
    highScoreContainer.style.display = "block";
    scoreBoardEl.textContent = "Time: " + timerSec;
    correctAnswers.textContent = "correct:" + correctAns + "/10";
    timerContainer.style.display = "none";
    clearInterval(timerInterval);
 // } if (currQuestionIdx === questions.correct) {
    //console.log(correct)
    
 }
   if( event.target.matches("button") ){
        //did user click on the correct button
    
      if( event.target.textContent === currQuestion.correct ){
         correctAns++;
         console.log(correctAns)
        answerIsCorrect()
        } else {
           
           }
        
          }
        displayQuestion()
})

startBtn.addEventListener("click", start);