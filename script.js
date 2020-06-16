// VARIABLES
// Array to contain the leaderboard initials
var highScoreInitials = [];
// Array to contain the leaderboard scores
var highScores = [];
// Variable to add points to total score. Must be cleared at the end of each round!
var points = 0;
// Variable to contain the remaining time on the clock.
var timeLeft = 100;

finalAnswer = "";

// Set of variables created to add buttons corresponding to question answers.
var buttonCreate1 = document.createElement("button");
buttonCreate1.className = "btn btn-primary btn-lg";
buttonCreate1.id = "btn1"

var buttonCreate2 = document.createElement("button");
buttonCreate2.className = "btn btn-primary btn-lg";

var buttonCreate3 = document.createElement("button");
buttonCreate3.className = "btn btn-primary btn-lg";

var buttonCreate4 = document.createElement("button");
buttonCreate4.className = "btn btn-primary btn-lg";

// Variables to hold the answer text displayed on buttons for each question.
var answerOne = "lalal";
var answerTwo = "";
var answerThree = "";
var answerFour = "";

// Object variables containing the questions and all possible answers/
var question1 = {
    question: "Question text.",
    answer1: "Answer 1 text.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
}

var question2 = {
    question: "Question text.",
    answer1: "Answer 1 text.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
}

var question3 = {
    question: "Question text.",
    answer1: "Answer 1 text.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
}

var question4 = {
    question: "Question text.",
    answer1: "Answer 1 text.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
}

var question5 = {
    question: "Question text.",
    answer1: "Answer 1 text.",
    answer2: "Answer 2 text.",
    answer3: "Answer 3 text.",
    answer4: "Answer 4 text."
}



var questions = [question1.question, question2.question, question3.question, question4.question, question5.question];
// Array Variable containing the answer key.
var answers = ["Question1 answer", "Question2 answer", "Question3 answer", "Question4 answer", "Question5 answer"];
var userAnswers = [];

function returnAns(){
    return buttonCreate1.textContent

};



function setUp(){

    
// Removes the "Begin quiz" button
    var objectRemove = document.getElementById("remove1")
    objectRemove.remove();

// Creates 4 new buttons to be used for answering questions. 
    buttonCreate1.textContent = answerOne;
    document.getElementById("answer-one").appendChild(buttonCreate1);

    buttonCreate2.textContent = answerTwo;
    document.getElementById("answer-two").appendChild(buttonCreate2);

    buttonCreate3.textContent = answerThree;
    document.getElementById("answer-three").appendChild(buttonCreate3);

    buttonCreate4.textContent = answerFour;
    document.getElementById("answer-four").appendChild(buttonCreate4);

    if (returnAns()==="lalal"){
        console.log("success")
    }


    for (let i = 0; i < questions.length; i++) {
        

        
        
    }

} 




// On page load, display quiz instructions and a button to begin the quiz.
// Display button to view high scores & display the countdown timer.

// When the begin quiz button is clicked, start the countdown time and display the first question.

// When the question is answered, if correct, write "Correct!" to page, add points to the user's score, and display the next question.
// If incorrect, write "Wrong!" to page, subtract 5 seconds from the timer, and display next question.

// When all questions are answered, or time runs out, display the user's score and ask for initials to display on a scoreboard.

// When initials are submitted, display the list of high scores and a button to start over alongside a button to clear the high scores.

// If clear high scores button is clicked, clear high scores.

// If start over button is clicked, reset the timer and return to the instructions page.

// If high scores button is clicked, stop timer and show high scores page.