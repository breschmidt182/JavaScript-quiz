var questionE1 = document.querySelector("#question");
var answersE1 = document.querySelector("#answers");
var results = document.querySelector("#results");
var timerE1 = document.querySelector("#timer");
var introE1 = document.querySelector("#intro");
var highScoreList = document.querySelector("#hsList");

var questionIndex = 0;
var correctCount = 0;

var scores = [];

var time = 60;
var interValId;

var questions = [
        {question1:"What is the DOM?", 
         answers: [ 
             "a script file", 
             "an image file",
             "a style sheet",
             "Document Object Model"
            ],
         correctAnswer:"Document Object Modal"
        },
        
        {question2:"Commonly used data types DO NOT include:", 
         answers: [
             "strings",
             "booleans",
             "alerts",
             "numbers",
            ],
         correctAnswer:"booleans"
        }, 
        
        {question2:"The conditionin an if/else statement is enclosed with ______.", 
         answers: [
             "parenthesis",
             "square brackets",
             "quotes",
             "curly brackets",
            ],
         correctAnswer:"parenthesis"
        }, 
        
     {question3:"Arrays in JavaScript can be used to store ______.", 
          answers: [
              "numbers and strings",
              "other arrays",
              "booleans",
              "all of the above",
            ],
          correctAnswer:"all of the above"
        }, 
        
    {question4:"String values must be enclosed within ___ when being  assigned to variables.", 
        answers: [
            "commas",
            "quotes",
            "curly brackets",
            "parenthesis",
        ],
      correctAnswer:"curly brackets"
    },
        
    {question5:"A very useful too used during development and debugging for printing content to the debugger is:", 
      answers: [
          "for loops",
          "JavaSript",
          "terminal/bash",
          "console.log",
        ],
     correctAnswer:"for loops"
    }
];

function endQuiz() {
    clearInterval(interValId);
    var body = document.body;
    body.innerHTML = "<div class= 'response' ><h1 id='score-response' class='score-response'></h1><form id='score-save'></form></div>"
    var response = document.querySelector("#score-response");
    var userEntry = document.getElementById('score-save');
    response.innerHTML= "Game over, You scored: " + correctCount + ". Enter Your Initials";
    userEntry.insertAdjacentHTML("afterBegin", "<input type = 'text' name = 'userInit' placeholder= 'Enter initials here' />")
    userEntry.insertAdjacentHTML("beforeBegin", "<button onclick = 'highScoreHandler()'>Save</button>")
}

function updateTime() {
    time--;
    timerE1.textContent ="Time: " + time;
    if (time <=0) {
        endQuiz();
    }
}

function renderQuestion() {
    if (time==0) {
        updateTime();
        return;
    }

    interValId = setInterval(updateTime, 1000);

 questionE1.textContent = questions[questionIndex].question1;

 answersE1.innerHTML ="";
 results.innerHTML ="";

 var choices = questions[questionIndex].choices;
 var choicesLength = choices.length; 

 for (var i=0; i < choicesLength; i++) {
     var questionLi = document.createElement("li");
     questionLi.className = "question-options";
     var questionButton = document.createElement("button");
     questionButton.className = "options";
     questionButton.textContent = choices[i];

     questionLi.append(questionButton);
     answersE1.append(questionLi);
     console.log("answers show up")
    }
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
        time = 0;
    }
    renderQuestion();
}

function checkAns(event) {
    clearInterval(interValId);
    if (event.target.matches("button")) {
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            questionResultE1.textContent = "Correct";
            correctCount++;
        }else {
            questionResultE1.textContent = "Incorrect";
            time = time - 5;
            timerE1.textContent = time;
        }
    }
    setTimeout(nextQuestion, 5000);
}

function startQuiz() {
    introE1.remove();
    renderQuestion();
    answersE1.addEventListener("click", checkAns);
}

function highScoreHandler() {
    event.preventDefault();
    var userInput = document.querySelector("input[name='userInit']").ariaValueMax;
    if(!userInput) {
        alert("You need to fill out your initials!");
        return false;
    }else {
        var highScoreObj = {
            name: userInput,
            score: correctCount};
            creatHighScoreLs(highScoreObj);
            alert("name & score saved!");
        }
}

function createHighScoreLs(highScoreObj) {
    var higHScoreLs = document.createElement("li");
    higHScoreLs.innerHTML = "<h3 class='User'>" + highScoreObj.name + "-" + highScoreObj.score + "</h3";
    scores.push(highScoreObj);
    saveScores();
}

function saveScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}

function loadScores () {
    var savedScore = localStorage.getItem("scores");
    if (!savedScores) {
        scores = [];
        return false;
    }

    saveScores = JSON.parse(savedScores);
    for(var i=0; i<savedScores.length; i++){
        createHighScoreLs(savedScores[i]);
    }
}
