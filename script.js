// VARIABLES
// Array to contain the leaderboard initials
var highScoreInitials = [];
// Array to contain the leaderboard scores
var highScores = [];
// Variable to add points to total score. Must be cleared at the end of each round!
var points = 0;
// Variable to contain the remaining time on the clock.
var timeLeft = 100;

scoreBoardAdd = [];
scoreBoardAdd2 = [];

var firstButton = document.getElementById("A");
var secondButton = document.getElementById("B");
var thirdButton = document.getElementById("C");
var fourthButton = document.getElementById("D");

var localStoredInitialList = [];
var localStoredScoreList = [];


localStoredInitialList = JSON.parse(localStorage.getItem("highScoreInitials")) || [];
localStoredScoreList = JSON.parse(localStorage.getItem("highScores")) || [];





var i = 0;

finalAnswer = "";

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

// Object variables containing the questions and all possible answers/
var questionPool = [question1, question2, question3, question4, question5]

// Array Variable containing the answer key.
var answers = ["<script>", "alert(“Hello World!”);", "<script src=”script.js”>", "False", ".innerHTML"];

// On page load, display quiz instructions and a button to begin the quiz.
// Display button to view high scores & display the countdown timer.
function setUp(){ 
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

    // Starts the countdown
    timerStart();

    // When the begin quiz button is clicked, start the countdown time and display the first question with nextQuestion and timerStart question.
    nextQuestion();
};

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



function answerCheck(){
    if (finalAnswer === answers[i]) {
        console.log("correct");
        points = points + 10;
        // i++;
    }
    else {
        console.log("wrong");
        timeLeft = timeLeft-5;
        // i++;
    }
};

function nextQuestion(){
    var questionPopulate = document.getElementById("questionCaller");
    questionPopulate.textContent = questionPool[i].question;

    
    firstButton.textContent = questionPool[i].answer1;
    secondButton.textContent = questionPool[i].answer2;
    thirdButton.textContent = questionPool[i].answer3;
    fourthButton.textContent = questionPool[i].answer4;
};

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
        console.log(scoreBoardAdd);
        console.log(scoreBoardAdd2);

        localStorage.setItem("highScores", JSON.stringify(localStoredScoreList))
        localStorage.setItem("highScoreInitials", JSON.stringify(localStoredInitialList))

        showScoreboard();
    }
};

function showScoreboard(){
    event.preventDefault();
    timeLeft = 100;
    var SBD = document.getElementById("score-input");
    SBD.style.display="block";
    var scoreList = document.getElementById("scores");
    scoreList.style.display="block";

    

    // console.log(localStoredInitialList);
    // console.log(localStoredScoreList);
    document.getElementById("listOfScores").innerHTML = "";

    for (let x = 0; x < localStoredInitialList.length; x++) {
        var scoreAdd = document.createElement("LI");
        var scoreNode = document.createTextNode(localStoredInitialList[x] + ": " + localStoredScoreList[x]);
        scoreAdd.appendChild(scoreNode);
        document.getElementById("listOfScores").appendChild(scoreAdd)
    }
};


var listen4HighScore = document.getElementById("leaderboard");
listen4HighScore.addEventListener("click", function(){
    console.log("AWESOME!");
    showScoreboard();
});

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

function resetScores(){
    localStoredInitialList = [];
    localStoredScoreList = [];
    localStorage.setItem("highScores", JSON.stringify(localStoredScoreList))
    localStorage.setItem("highScoreInitials", JSON.stringify(localStoredInitialList))

};


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