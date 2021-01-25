# Code-Quiz
Homework 4
# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this unit, this week’s homework invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria
```
GIVEN I am taking a code quiz
<!--// What does my initial html page look like? >

WHEN I click the start button
THEN a timer starts and I am presented with a question
<!--// When I click to start the quiz, my html page displays the first question with answer choices I can slelect and the clock on the timer starts to run down. -->

WHEN I answer a question
THEN I am presented with another question
<!--//  When I click on an answer choice, I am prompted with feedback that tells me if I answered correctly or incorrectly. -->

WHEN I answer a question incorrectly
THEN time is subtracted from the clock
<!-- // When I answer incorrectly, my clock is deducted by a certain number of seconds and continues to run down. My html page then displays the next question and answer choices. -->

WHEN all questions are answered or the timer reaches 0
THEN the game is over
<!--// When I answer all of the questions, the clock stops and the game is over. The number of seconds remaining on the clock is my score. If there are no seconds remaining on the clock, then the game is over, whether or not I answered all of the questions. -->

WHEN the game is over
THEN I can save my initials and my score
<!--// When the game is over, my html page displays my final score and I enter my initials to save my score. When I enter my initials and click submit, I am routed to the high scores html page that keeps track of all scores and initials saved. -->

ALSO...
<!--// When I click on the View HighScores hyperlink from my main html page, I can view all historical high scores and the data remains, even when I refresh the browser. When I click clear highscores, then all the saved scores dissapear. I can also navigate back to the main html page by clicking on the "go back" button. -->


## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Grading Requirements

This homework is graded based on the following criteria: 

### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria.

### Deployment: 32%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

* Application resembles the mock-up functionality provided in the homework instructions.

### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme file with description, screenshot, and link to deployed application.

## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
