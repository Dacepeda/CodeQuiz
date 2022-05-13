var timerEL = document.getElementById("timer")
var startbtn = document.getElementById("start-time")
var i = 1
var questionEl = document.getElementById("QuestionDiv");
var optionsEL = document.getElementById("optionsDiv");
var questionlist = [
    {
        questions: "what type is pikachu?",
        options: ['water','fairy','ground', 'electric'],
        answer: "electric"
    },
    {
        questions: "What Generation is Kanto?",
        options: ['1','2','3','4'],
        answer: "1"
    }
]

questionlist[i].name
// console.log(questionlist[1])
questionEl.innerHTML = questionlist[1].questions;
optionsEL.innerHTML = "<li>" + questionlist[1].options[1] + "</li>" + "<li>" + questionlist[2].options[2] + "</li>"


// startbtn.addEventListener('click', function() {
// countdown
// })