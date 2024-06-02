var scoreA = 0; // store type a score
var scoreB = 0; // store type b score
var button = document.getElementById("restart");

var questionCount = 0; 

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

button.addEventListener("click", myButton);

q1a1.addEventListener("click", typeA);
q1a2.addEventListener("click", typeB);

q2a1.addEventListener("click", typeA);
q2a2.addEventListener("click", typeB);

q3a1.addEventListener("click", typeA);
q3a2.addEventListener("click", typeB);

function typeA() {
    scoreA += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + ", ScoreA = " + scoreA);

    if (questionCount == 3) {
        console.log('The quiz is Done');
        updateResult();
    }
}

function typeB() {
    scoreB += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + ", ScoreB = " + scoreB);

    if (questionCount == 3) {
        console.log('The quiz is Done');
        updateResult();
    }
}

// quiz result
function updateResult() {
    if (scoreA >= 2) {
        result.textContent = "You are Type A";
        console.log("You are Type A");
    } else if (scoreB >= 2) {
        result.textContent = "You are Type B";
        console.log("You are Type B");
    }
}

function myButton() {
    scoreA = 0;
    scoreB = 0;
    questionCount = 0;
    result.textContent = "Your result is...";
}
