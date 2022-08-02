var userHighScores = document.querySelector("#final-scores")
var initials = localStorage.getItem("initials")
var scores = localStorage.getItem("score")
var backBtn = document.querySelector("#go-back")
var clearBtn = document.querySelector("#clear-high-scores")
var allScores = document.querySelector("#final-scores")

function showHighScores() {
    userHighScores.innerHTML = `${initials} - ${scores}`
}; 


function goBack () {
    window.location = "./index.html"
};

backBtn.addEventListener("click", function (event){
    event.preventDefault(); 
    goBack(); 
}); 

function clearScores (event) { 
    localStorage.removeItem("highscores"); 
    window.location.reload()
}; 

clearBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    clearScores(); 
})


function printScores () {
    var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
    highScores.sort(function (a,b) {
        return b.score - a.score
    })
    
    console.log(highScores[0])

    for (var i = 0; i < highScores.length; i++) {
        var liEl = document.createElement("li"); 
        liEl.textContent = highScores[i].name + " - " +  highScores[i].score;
        allScores.appendChild(liEl); 
    }
};

printScores(); 
