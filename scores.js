
var submitbtnEl = document.querySelector("#submit-btn");
var scoreEl = document.querySelector("#score");
console.log(localStorage.getItem("score"))
scoreEl.textContent = localStorage.getItem("score")

submitbtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    submitInit();
    userInit(); 
});

function submitInit () { 
    window.location = "./highscores.html"; 
};

function userInit () {
    var init = document.querySelector("#initials").value;
    localStorage.setItem("initials", init)
    var highScores = JSON.parse(localStorage.getItem("highscores")) || []
    var newScore = {
        name: init,
        score:  localStorage.getItem("score")
    }

    
    
    highScores.push(newScore)

    
    localStorage.setItem('highscores', JSON.stringify(highScores))
    
}


