// VARIABLES
// Array to contain the leaderboard initials
var highScoreInitials = [];
// Array to contain the leaderboard scores
var highScores = [];
// Variable to add points to total score. Must be cleared at the end of each round!
var points = 0;
// Variable to contain the remaining time on the clock.
var timeLeft = 100;

// Variable set to identify the buttons in order to change text.
var firstButton = document.getElementById("A");
var secondButton = document.getElementById("B");
var thirdButton = document.getElementById("C");
var fourthButton = document.getElementById("D");

// Variables setting starter values for initials and score.
var localStoredInitialList = [];
var localStoredScoreList = [];

// Pulling data from the local storage to fill the two arrays.
localStoredInitialList = JSON.parse(localStorage.getItem("highScoreInitials")) || [];
localStoredScoreList = JSON.parse(localStorage.getItem("highScores")) || [];

// Setting i for later functions.
var i = 0;

// Variable used in checking answers for correctness.
finalAnswer = "";

// Object vaiables containing quiz questions and possible answers.
var question1 = {
    question: "What is the HTML tag under which one can write the JavaScript code?",
    answer1: "<javascript>",
    answer2: "<scripted>",
    answer3: "<script>",
    answer4: "<js>"
};

var question2 = {
    question: "Which of the following is the correct syntax to display “Hello World!” in an alert box using JavaScript?",
    answer1: "alertbox(“Hello World!”);",
    answer2: "msg(“Hello World!”);",
    answer3: "alert(“hello-world”);",
    answer4: "alert(“Hello World!”);"
};

var question3 = {
    question: "What is the correct syntax for referring to an external script called “script.js”?",
    answer1: "<script src=”script.js”>",
    answer2: "<script href=”script.js”>",
    answer3: "<script ref=”script.js”>",
    answer4: "<script name=”script.js”>"
};

var question4 = {
    question: "The external JavaScript file must contain <script> tag. True or False?",
    answer1: "True",
    answer2: "False",
    answer3: "I don't know",
    answer4: "What is Javascript?"
};

var question5 = {
    question: "What Javascript method can we use to change the text between two HTML tags?",
    answer1: ".addEventListener",
    answer2: ".createElement",
    answer3: ".getElementById",
    answer4: ".innerHTML"
};

// Array of object variables to reference when populating questions and answers to the page.
var questionPool = [question1, question2, question3, question4, question5]

// Array Variable containing the answer key.
var answers = ["<script>", "alert(“Hello World!”);", "<script src=”script.js”>", "False", ".innerHTML"];

// When the "Begin Quiz" button is clicked the setup function runs to delete the "Begin Quiz" button, and populate the questions and answers.
function setUp(){ 
// Removes the "Begin quiz" button
    var objectRemove = document.getElementById("remove1")
    objectRemove.remove();
// Reveals the four answer choice buttons.
    var showButtonA = document.getElementById("A");
    showButtonA.style.display="block";

    var showButtonB = document.getElementById("B");
    showButtonB.style.display="block";

    var showButtonC = document.getElementById("C");
    showButtonC.style.display="block";

    var showButtonD = document.getElementById("D");
    showButtonD.style.display="block";

    // Starts the countdown timer.
    timerStart();

    // Runs the next question function.
    nextQuestion();
};

// Set of 4 functions to check the answer selected against the key and populate the next question.
function selectA(){
    finalAnswer = firstButton.textContent;
    answerCheck();
    i++;
    nextQuestion();
};

function selectB(){
    finalAnswer = secondButton.textContent;
    answerCheck();
    i++;
    nextQuestion();
};

function selectC(){
    finalAnswer = thirdButton.textContent;
    answerCheck();
    i++;
    nextQuestion();
};

function selectD(){
    finalAnswer = fourthButton.textContent;
    answerCheck();
    i++;
    nextQuestion();
};

// Function to check answer correctness and add points or remove time accordingly.
function answerCheck(){
    if (finalAnswer === answers[i]) {
        console.log("correct");
        points = points + 10;
    }
    else {
        console.log("wrong");
        timeLeft = timeLeft-5;
    }
};

// Writes the next question to the screen and populates the button text to match the related answers.
function nextQuestion(){
    var questionPopulate = document.getElementById("questionCaller");
    questionPopulate.textContent = questionPool[i].question;

    
    firstButton.textContent = questionPool[i].answer1;
    secondButton.textContent = questionPool[i].answer2;
    thirdButton.textContent = questionPool[i].answer3;
    fourthButton.textContent = questionPool[i].answer4;
};

// Allows the user to input initials, then adds the user input and user's score to a locally stored scoreboard page.
function writeToScoreboard(){
    event.preventDefault();

    var scoreBoardAddInitials = document.getElementById("scoreForm").elements[0].value;
        scoreBoardAdd = scoreBoardAddInitials;

        scoreBoardAdd2 = points;

    if (scoreBoardAdd === ""){
        alert("Please enter your initials!")
        event.preventDefault();   
    }
    else if (scoreBoardAdd !== ""){

        localStoredInitialList.push(scoreBoardAdd);
        localStoredScoreList.push(scoreBoardAdd2);

        localStorage.setItem("highScores", JSON.stringify(localStoredScoreList))
        localStorage.setItem("highScoreInitials", JSON.stringify(localStoredInitialList))

        showScoreboard();
    }
};

// Reveals the locally stored scoreboard and writes scores as new list items.
function showScoreboard(){
    event.preventDefault();
    timeLeft = 100;
    var SBD = document.getElementById("score-input");
    SBD.style.display="block";
    var scoreList = document.getElementById("scores");
    scoreList.style.display="block";

    document.getElementById("listOfScores").innerHTML = "";

    for (let x = 0; x < localStoredInitialList.length; x++) {
        var scoreAdd = document.createElement("LI");
        var scoreNode = document.createTextNode(localStoredInitialList[x] + ": " + localStoredScoreList[x]);
        scoreAdd.appendChild(scoreNode);
        document.getElementById("listOfScores").appendChild(scoreAdd)
    }
};

// Allows the scoreboard to be revealed when the "High Scores" link is clicked.
var listen4HighScore = document.getElementById("leaderboard");
listen4HighScore.addEventListener("click", function(){
    console.log("AWESOME!");
    showScoreboard();
});

// Reveals the screen that allows the user to input their initials to be entered on the scoreboard.
function scoreBoardInput(){
    var SBD = document.getElementById("score-input");
    SBD.style.display="block";

    var totalScore = document.getElementById("scoredata");
    totalScore.innerHTML = "Total Score: " + points;
};

// Sets teh interval of the timer and identifies when it stops.
function timerStart(){
    var interval = setInterval(function(){
        // Sets the starting timer
        timeLeft = timeLeft-1;
        timer.innerHTML = "Time Remaining: " + timeLeft;

        if (timeLeft===0) {
            clearInterval(interval);
            timeLeft = 100;
            scoreBoardInput();
            
        }
        else if (i === questionPool.length){
            clearInterval(interval);
            timeLeft = 100;
            scoreBoardInput();
        }

    }, 1000)
}

// Allows the "Reset Scores" button to function by overwriting the list of existing scores.
function resetScores(){
    localStoredInitialList = [];
    localStoredScoreList = [];
    localStorage.setItem("highScores", JSON.stringify(localStoredScoreList))
    localStorage.setItem("highScoreInitials", JSON.stringify(localStoredInitialList))

};

// Identifies the timer so that the text may be updated each second.
var timer = document.getElementById("timer")