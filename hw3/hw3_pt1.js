const score = document.getElementsByClassName("grade-score")
const btnClear = document.getElementById("clear")
const btnSubmit = document.getElementById("submit")
const textArea = document.getElementById("text-area")
const hwAvg = document.getElementById("homework-avg")
const midtermScore = document.getElementById("midterm-score")
const finalScore = document.getElementById("final-score")
const participation = document.getElementById("participation")
let inputs = []

btnClear.addEventListener('click', () => {
    for (let x = 0; x < score.length; x++) {
        score[x].value = "";
        textArea.innerHTML = "";
        // textArea.style.visibility = "hidden";
    }
})

document.onkeydown = (e) => {
    if (e.key === "Enter") {
        if (btnClear.onfocus) {
            btnClear.addEventListener('keydown', () => {
                for (let x = 0; x < score.length; x++) {
                    score[x].value = "";
                    textArea.innerHTML = "";
                }
            });
        }
        else {
            checkInput()
        }
    }
}

btnSubmit.addEventListener('click', () => {
    checkInput()
});

function checkInput() {
    for (let x = 0; x < score.length; x++) {
        if (score[x].value === "") {
            textArea.innerHTML = "Please input all grades"
            inputs = []
            break
        }
        if(Number.isInteger(parseInt(score[x].value)) && score[x].value >= 0 && score[x].value <= 100) {
            inputs.push(+score[x].value)
            if (inputs.length === score.length) {
                calculateGrade()
                inputs = []
            }
        }
        else {
            textArea.innerHTML = "Please input a valid grade";
            console.log(inputs)
            inputs = []
            break
        }
    }
}

function calculateGrade() {
    // textArea.style.visibility = "visible"
    // final average = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation)
    finalGrade = (0.5 * hwAvg.value) + (0.2 * midtermScore.value) + (0.2 * finalScore.value) + (0.1 * participation.value)
    finalGrade = Math.round(finalGrade)
    if (finalGrade >= 90) {
        textArea.innerHTML = `Your final score is ${finalGrade}<br>Congratulations you got an A!`
    }
    else if (finalGrade >= 80 && finalGrade <= 89) {
        textArea.innerHTML = `Your final score is ${finalGrade}<br>You got a B!`
    }
    else if (finalGrade >= 70 && finalGrade <= 79) {
        textArea.innerHTML = `Your final score is ${finalGrade}<br>You got a C!`
    }
    else if (finalGrade >= 60 && finalGrade <= 69) {
        textArea.innerHTML = `Your final score is ${finalGrade}<br>You got a D!<br>You must retake the class`
    }
    else {
        textArea.innerHTML = `Your final score is ${finalGrade}<br>You got a F!<br>You must retake the class`
    }
}