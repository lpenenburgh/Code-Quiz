// Query Selectors/getting elements from html
//Start page variables
var timerEl = document.querySelector("#timer");
var startPage = document.querySelector(".start-page");
var startButton = document.querySelector("#start-button");
// Quiz page variables
var quizPage = document.querySelector(".quiz-page");
var questionAsked = document.querySelector("#questions-asked");
var choiceButtons = document.querySelector("#choice-buttons");
var questionResp = document.querySelector("#question-response");
// Result page variables
var resultsPage = document.querySelector(".results-page");
var finalScore = document.querySelector(".final-score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit-button");
// Highscore page variables
var highscorePage = document.querySelector(".highscore-page");
var listedHighscores = document.querySelector(".highscores-listed");
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
        question: "Which of the following is NOT a primative data type?",
        answerList: [
            "String",
            "Object",
            "Number",
            "Boolean"
        ],
        correctAnswer: 1
    },

    {
        question: "Which of the following has incorrect syntax?",
        answerList: [
            "Element.setAttribute(name, value)",
            "document.createElement(nodename)",
            "c ",
            "d "
        ],
        correctAnswer: 3
    },

    {
        question: "Which of the following",
        answerList: [
            "a",
            "b ",
            "c ",
            "d "
        ],
        correctAnswer: 2
    },

    {
        question: "What does?",
        answerList: [
            "a ",
            "b ",
            "c ",
            "d "
        ],
        correctAnswer: 0
    },

    {
        question: "Does what?",
        answerList: [
            "a ",
            "b. ",
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
        timerInterval = setInterval(tickDown, 1000);
        //quiz questions will appear
        showQuestions();

    }
}

//coutdown function
function tickDown() {
    time--;
    timerEl.textContent = "Time left: " + time;
    //once the timer hits 0, the game ends
    if (time <= 0) {
        end();
    }
}


//funtion to showQuestions 
function showQuestions() {
    var presentQuestion = quizQuestions[quizQuestionsIndex];
    questionAsked.textContent = quizQuestions[quizQuestionsIndex].question;
    //shows answer choices as buttons
    choiceButtons.setAttribute("class", "btn-group-vertical");
    //loop through questions one by one
    for (var i = 0; i <quizQuestions.length - 1; i++) {
        showAnswers(i);
    }
}