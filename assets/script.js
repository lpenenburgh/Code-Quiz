// Query Selectors/getting elements from html
//Start page variables
var timerEl = document.querySelector("#timer");
var startPage = document.querySelector(".start-page");
var startButton = document.querySelector("#start-button");
// Quiz page variables
var quizPage = document.querySelector(".quiz-page");
var questionAsked = document.querySelector("#question");
var choiceButtons = document.querySelector("#choice-buttons");
var questionResp = document.querySelector("#question-response");
// Result page variables
var resultsPage = document.querySelector(".results-page");
var finalScore = document.querySelector(".final-score");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit-button");
// Highscore page variables
var highscorePage = document.querySelector(".highscore-page");
var listedHighscores = document.querySelector(".highscores-listed");
var hsList = document.querySelector("#hslist")
var goBackButton = document.querySelector("#goback-button");
var clearScoresButton = document.querySelector("#clear-highscores");
//highscore link 
var viewHighscores = document.querySelector(".highscore-link");
//timer variables
var timeInterval;
var time = 75
var quizQuestionsIndex = 0;

//Quiz Questions
var quizQuestions = [
    {
        question: ["Which of the following is NOT a primative data type?"],
        answerOptions: [
            "String",
            "Object",
            "Number",
            "Boolean"
        ],
        correctAnswer: 1
    },

    {
        question: "Which of the following has incorrect syntax?",
        answerOptions: [
            "Element.setAttribute(name, value)",
            "document.createElement(nodename)",
            "c ",
            "d "
        ],
        correctAnswer: 3
    },

    {
        question: "Which of the following",
        answerOptions: [
            "a",
            "b ",
            "c ",
            "d "
        ],
        correctAnswer: 2
    },

    {
        question: "What does?",
        answerOptions: [
            "a ",
            "b ",
            "c ",
            "d "
        ],
        correctAnswer: 0
    },

    {
        question: "Does what?",
        answerOptions: [
            "a ",
            "b ",
            "c. ",
            "d. "
        ],
        correctAnswer: 0
    },
]


//Start button waits for user to click it
startButton.addEventListener("click", startQuiz);

//Once clicked, the startPage content will disapear and timer will start
function startQuiz(event) {
    if (event.target.matches("BUTTON")) {
        startPage.setAttribute("style", "display:none");
        timerInterval = setInterval(tickDown, 1000)
        //quiz questions will appear

        showQuestions();

    }
}




//function to showQuestions 
function showQuestions() {
    questionAsked.textContent = quizQuestions[quizQuestionsIndex].question;

    //shows answer choices as buttons
    choiceButtons.setAttribute("class", "btn-group-vertical");
    //loop through questions one by one
    for (var i = 0; i < quizQuestions.length - 2; i++) {
        showAnswers(i);
    }
}

//function to showAnswers- each answer choice is made into a button to give it functionality
function showAnswers(indexVal) {
    var choiceBtn = document.createElement("BUTTON");
    choiceBtn.textContent = quizQuestions[quizQuestionsIndex].answerOptions[indexVal];
    choiceBtn.setAttribute("class", "btn btn-primary m-2");
    choiceBtn.setAttribute("data-index", indexVal);
    choiceBtn.addEventListener("click", checkAnswer);
    choiceButtons.appendChild(choiceBtn);
}

//coutdown function
function tickDown() {
    time--;
    timerEl.textContent = "Time left: " + time;
    //once the timer hits 0, the game ends
    if (time === 0) {
        endGame();
    }
}

//function to check correct/incorrect answers
function checkAnswer(event) {
    event.preventDefault();
    if (parseInt(event.target.getAttribute("data-index")) === quizQuestions[quizQuestionsIndex].correctAnswer) {
        quizQuestionsIndex++;
    }
    else {
        time = time - 10;
        quizQuestionsIndex++;
    }
    choiceButtons.innerHTML = "";
    questionAsked.innerHTML = "";

    if (quizQuestionsIndex === quizQuestions.length) {
        return endGame();
    }
    showQuestions()

}

function endGame() {
    clearInterval(timerInterval);

    resultsPage.setAttribute("style", "display:block");
    submitButton.addEventListener("click", finalScore);
}

function finalScore(event) {
    event.preventDefault();
    highscorePage.setAttribute("style", "display:block");
    var initials = initialsInput.nodeValue.trim();

    if (initials) {
        var localStorageHighScores = JSON.parse(window.localStorage.getItem("localStorageHighScores")) || [];

        var newScore = {
            initials: initials,
            score: time
        }

        localStorageHighScores.push(newScore);

        window.localStorage.setItem("localStorageHighScores", JSON.stringify(localStorageHighScores))


    }
}

function showHighScores() {
   
    var localStorageHighScores = JSON.parse(window.localStorage.getItem("localStorageHighScores")) || [];

    for (var i = 0; i < localStorageHighScores.length; i++) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "list-group-item");
        hsList.appendChild(liEl);
    }
}

function resetScores() {
    window.localStorage.clear();
    showHighScores();
}

showHighScores();

goBackButton.addEventListener("click", resetScores);