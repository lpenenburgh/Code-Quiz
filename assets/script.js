// Query Selectors/getting elements from html
//Start page variables
var startPage = document.querySelector(".start-page");
var startButton = document.querySelector("#start-button");
// Quiz page variables
var quizPage = document.querySelector(".quiz-page");
var questionAsked = document.querySelector("#questions-asked");
var questionChoices = document.querySelector("#question-choices");
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

//timer variables
var timer = document.querySelector("#timer");
var secondsLeft = 75;
var score = secondsLeft;

//Quiz Questions
var quizQuestions = [
    {
        question: "Which of the following is NOT a primative data type?",
        answer: {
            a:"String",
            b:"Object",
            c:"Number",
            d:"Boolean",
        }, 
        correctAnswer: "b",
    },

    {
        question: "Which of the following has incorrect syntax?",
        answer: {
            a:"Element.setAttribute(name, value)",
            b:"document.createElement(nodename)",
            c:"",
            d:"",
        }, 
        correctAnswer: "",
    },

    {
        question: "",
        answer: {
            a:"",
            b:"",
            c:"",
            d:"",
        }, 
        correctAnswer: "",
    },

    {
        question: "",
        answer: {
            a:"",
            b:"",
            c:"",
            d:"",
        }, 
        correctAnswer: "",
    },

    {
        question: "",
        answer: {
            a:"",
            b:"",
            c:"",
            d:"",
        }, 
        correctAnswer: "",
    },
]

// When I click to start the quiz, my html page displays the first question with answer choices I can slelect and the clock on the timer starts to run down. -->

var timerInterval = setInterval(function () {
    secondsLeft -=1;
    timer.textContent = "Time: " + (secondsLeft - 1);
}


//  When I click on an answer choice, I am prompted with feedback that tells me if I answered correctly or incorrectly. -->

 // When I answer incorrectly, my clock is deducted by a certain number of seconds and continues to run down. My html page then displays the next question and answer choices. -->
// When I answer all of the questions, the clock stops and the game is over. The number of seconds remaining on the clock is my score. If there are no seconds remaining on the clock, then the game is over, whether or not I answered all of the questions. -->

// When the game is over, my html page displays my final score and I enter my initials to save my score. When I enter my initials and click submit, I am routed to the high scores html page that keeps track of all scores and initials saved. -->

// When I click on the View HighScores hyperlink from my main html page, I can view all historical high scores and the data remains, even when I refresh the browser. When I click clear highscores, then all the saved scores dissapear. I can also navigate back to the main html page by clicking on the "go back" button. -->
