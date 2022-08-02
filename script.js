var contentEl = document.getElementById("content")
var startbtnEl = document.querySelector("#start-button");
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");

var scoreEl = document.querySelector("#score");
var timer = 25;
var currentQuestionIndex = 0;
var timerInterval;
var userScore = 0;
var questions = [
    {
        question: "Commonly used data types do NOT include: ",
        choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correct: "3. alerts"

    },

    {
        question: "The condition in an if/else statement is encoled with ______: ",
        choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correct: "3. parenthesis"

    },

    {
        question: "Arrays in JavaScript can be used to store: ",
        choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correct: "4. all of the above"

    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables: ",
        choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correct: "3. quotes"

    }
]

function renderQuestions() {
    contentEl.innerHTML = " ";
    var randomQuestion = questions[currentQuestionIndex];
    console.log('currentQuestionIndex', currentQuestionIndex);
    var header = document.createElement("h2");
    header.textContent = randomQuestion.question;
    console.log('randomQuestion', randomQuestion);
    contentEl.appendChild(header);
    console.log(contentEl)

    var ulEl = document.createElement("ul");
    
    for (var i = 0; i < randomQuestion.choices.length; i++) {
        var liEl = document.createElement("li");
        liEl.setAttribute("class", "options")
        liEl.textContent = randomQuestion.choices[i];
        ulEl.appendChild(liEl);
    }
    contentEl.appendChild(ulEl);
};

startbtnEl.addEventListener("click", function () {
    renderQuestions();

    timerInterval = setInterval(function () {
        
        timer--;

        if (timer === 0 ) { 
            clearInterval(timerInterval);
            
            contentEl.innerHTML = " "; 
            endGame();  
        }

        timerEl.textContent = timer;
    }, 1000)

});

function endGame () {
    contentEl.innherHTML= " "; 
    var gameOver = document.createElement("h2")
    gameOver.textContent = "Game over! Go to next page to see score: ";
    contentEl.appendChild(gameOver); 
    var nextBtn = document.createElement("button"); 
    nextBtn.setAttribute("class", "button");
    nextBtn.textContent = "Go to next page"; 
    contentEl.appendChild(nextBtn); 
    nextBtn.addEventListener("click", function () {
        window.location = "./quizfinish.html"
    });
    
}; 

contentEl.addEventListener("click", function (event) {
    if (event.target.matches("li")) {
        randomQuestion = questions[currentQuestionIndex];

        var userGuess = event.target.textContent;

        console.log(userGuess);
        console.log(randomQuestion.correct);

        if (userGuess === randomQuestion.correct) {
            console.log("userscore")
            userScore = userScore + 1; 
            console.log(userScore)
        } else {
            timer = timer - 10; 
            
        } 

        if (timer <= 0) {
            timerEl.textContent = timer
            finishQuiz(); 
        }

        if (currentQuestionIndex === questions.length - 1) {
            localStorage.setItem("score", userScore)
            finishQuiz();
            
        } else {
            currentQuestionIndex++;
            renderQuestions();
            
        }
        console.log(userScore)
        
        
        
    }
});



function finishQuiz () {
    window.location = "./quizfinish.html"
    scoreEl.textContent = localStorage.getItem("score")
    
};

function checkQuiz () {
    
};







