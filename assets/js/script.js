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
}

interValId = setInterval(updateTime, 1000);

questionE1.textContent = questions[questionIndex].question1;

answersE1.innerHTML ="";
results.innerHTML ="";

