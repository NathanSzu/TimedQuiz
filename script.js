// VARIABLES
// Array to contain the leaderboard initials
var highScoreInitials = [];
// Array to contain the leaderboard scores
var highScores = [];
// Variable to add points to total score. Must be cleared at the end of each round!
var points = 0;
// Variable to contain the remaining time on the clock.
var timeLeft = 100;

var firstButton = document.getElementById("A");
var secondButton = document.getElementById("B");
var thirdButton = document.getElementById("C");
var fourthButton = document.getElementById("D");

var i = 0;

finalAnswer = "";

// Variables to hold the answer text displayed on buttons for each question.
var answerOne = "";
var answerTwo = "";
var answerThree = "";
var answerFour = "";

var question1 = {
    question: "Question text.",
    answer1: "Test",
    answer2: "Test",
    answer3: "Test",
    answer4: "Answer 4 text."
};

var question2 = {
    question: "Question text.",
    answer1: "Answer 1 ahdbsl.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
};

var question3 = {
    question: "Question text.",
    answer1: "Test",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
};

var question4 = {
    question: "Question text.",
    answer1: "Answer 1 klzsxcivbnlkjdsaf.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
};

var question5 = {
    question: "Question text.",
    answer1: "Answer 1 text.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
};

// Object variables containing the questions and all possible answers/
var questionPool = [question1, question2, question3, question4, question5]

// Array Variable containing the answer key.
var answers = ["Test", "Question2 answer", "Question3 answer", "Question4 answer", "Question5 answer"];

function returnAns(){
    return buttonCreate1.textContent

};

// On page load, display quiz instructions and a button to begin the quiz.
// Display button to view high scores & display the countdown timer.
function setUp(){
// Starts the countdown
    timerStart();
    
// Removes the "Begin quiz" button
    var objectRemove = document.getElementById("remove1")
    objectRemove.remove();

    var showButtonA = document.getElementById("A");
    showButtonA.style.display="block";

    var showButtonB = document.getElementById("B");
    showButtonB.style.display="block";

    var showButtonC = document.getElementById("C");
    showButtonC.style.display="block";

    var showButtonD = document.getElementById("D");
    showButtonD.style.display="block";

    // When the begin quiz button is clicked, start the countdown time and display the first question with nextQuestion and timerStart question.
    nextQuestion();
};

function selectA(){
    finalAnswer = firstButton.textContent;
    nextQuestion();
};

function selectB(){
    finalAnswer = secondButton.value;
    nextQuestion();
};

function selectC(){
    finalAnswer = thirdButton.textContent;
    nextQuestion();
};

function selectD(){
    finalAnswer = fourthButton.textContent;
    nextQuestion();
};



function answerCheck(){
    if (finalAnswer === answers[i]) {
        console.log("correct");
        i++;
    }
    else {
        console.log("wrong");
        timeLeft = timeLeft-5;
        i++;
    }


};

function nextQuestion(){

    

    var questionPopulate = document.getElementById("questionCaller");
    questionPopulate.textContent = questionPool[i].question;

    
    firstButton.textContent = questionPool[i].answer1;
    secondButton.textContent = questionPool[i].answer2;
    thirdButton.textContent = questionPool[i].answer3;
    fourthButton.textContent = questionPool[i].answer4;

    answerCheck();

};

function scoreBoardInput(){
    var SBD = document.getElementById("score-input");
    SBD.style.display="block";

    var totalScore = document.getElementById("scoredata");
    totalScore.innerHTML = "Total Score: " + points;
};

function timerStart(){
    var interval = setInterval(function(){
        // Sets the starting timer
        timeLeft = timeLeft-1;
        timer.innerHTML = "Time Remaining: " + timeLeft;

        if (timeLeft===0) {
            clearInterval(interval);
            scoreBoardInput();
            
        }

    }, 1000)
}


console.log(questionPool[i])

console.log(questionPool[i].question)


// When the question is answered, if correct, write "Correct!" to page, add points to the user's score, and display the next question.
// If incorrect, write "Wrong!" to page, subtract 5 seconds from the timer, and display next question.

// When all questions are answered, or time runs out, display the user's score and ask for initials to display on a scoreboard.

// When initials are submitted, display the list of high scores and a button to start over alongside a button to clear the high scores.

// If clear high scores button is clicked, clear high scores.

// If start over button is clicked, reset the timer and return to the instructions page.

// If high scores button is clicked, stop timer and show high scores page.

var timer = document.getElementById("timer")