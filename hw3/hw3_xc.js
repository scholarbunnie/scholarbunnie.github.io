const textDisplay = document.getElementById("game-text")
const numDisplay = document.getElementById("times-text")
const userInput = document.getElementById("user-input")
const playAgain = document.getElementById("play-again")
const submit = document.getElementById("submit")
const inputLabel = document.getElementById("input-label")
let x = Math.floor(Math.random() * 10)
let y = Math.floor(Math.random() * 10)

numDisplay.innerHTML = `${x} * ${y}`
inputLabel.innerHTML = numDisplay.innerHTML

userInput.onkeydown = (e) => {
    if (!((e.key >= 0 && e.key <= 9) || (e.key === "Tab") || (e.key === "Backspace") || (e.getModifierState("Control"))) || (e.key === " ")) {
            e.preventDefault();
        }
}

function checkAnswer() {
    if (parseInt(userInput.value) === x * y) {
        playAgain.style.display = "block"
        submit.style.display = "none"
        textDisplay.innerHTML = `Very Good!<p>Would you like to play again?`
    }
    else {
        textDisplay.innerHTML = `Sorry, that is incorrect. :(<p>Please try again!`
        userInput.value = ""
    }
}

submit.addEventListener('click', () => {
    checkAnswer()
})

playAgain.addEventListener("click", (e) => { 
    if (e.target.id === "yes") {
        x = Math.floor(Math.random() * 10)
        y = Math.floor(Math.random() * 10)
        textDisplay.innerHTML = `How much is:`
        numDisplay.innerHTML = `${x} * ${y}`
        inputLabel.innerHTML = numDisplay.innerHTML
        playAgain.style.display = "none"
        submit.style.display = "inline"
        userInput.value = ""
    }
    else {
        textDisplay.innerHTML = `Thank you for playing!<p>See you next time :)`
    }
 });
