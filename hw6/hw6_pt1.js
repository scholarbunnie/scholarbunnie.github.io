const userInput = document.getElementById("user-input")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const output = document.getElementById("output-text")
const numberForm = document.getElementById("number-form")

userInput.onkeydown = (e) => {
 if (!((e.key >= 0 && e.key <= 9) || ([".", "Backspace", "Tab"].includes(e.key)) || (e.getModifierState("Control")))) {
    e.preventDefault();
 }
}

submit.addEventListener("click", () => {
    if (output.classList.contains("output-error")) {
        output.classList.remove("output-error")
    }
    output.innerHTML = ``
    checkInput()
})

clear.addEventListener("click", () => {
    if (output.classList.contains("output-error")) {
        output.classList.remove("output-error")
    }
    output.innerHTML = ``
    numberForm.reset()
})

function checkInput() {
    if (/^[0-9]*\.[0-9]{4,}$/.test(userInput.value)) {
        inputNumber = parseFloat(userInput.value)
        rounded = Math.round(inputNumber)
        sqrt = Math.round(Math.sqrt(inputNumber))
        floor = Math.floor(inputNumber)
        output.innerHTML = `The Number Inputted: ${inputNumber}<br>Rounded: ${rounded.toFixed()}<br>Square Root: ${sqrt.toFixed()}<br>Nearest Tenth: ${inputNumber.toFixed(1)}<br>Nearest Hundredth: ${inputNumber.toFixed(2)}<br>Nearest Thousandth: ${inputNumber.toFixed(3)}`
    }
    else {
        output.classList.add("output-error")
        output.innerHTML = `Please enter a number with at least 4 decimal places!`
    }
}