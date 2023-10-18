const shapeDiv = document.getElementById("shape-div")
const shapePre = document.getElementById("shape-pre")
const userInput = document.getElementById("number-input")
const submit = document.getElementById("submit")

userInput.onkeydown = (e) => {
    if (!((e.key >= 0 && e.key <= 9) || (e.key === "Tab") || (e.key === "Backspace") || (e.getModifierState("Control"))) || (e.key === " ")) {
        e.preventDefault();
    }
}

submit.addEventListener("click", () => {
    numberInput = parseInt(userInput.value)
    shapePre.innerHTML = ``
    if (numberInput >= 2 && numberInput <= 10) {
        for (let i = 0; i < numberInput; i++) {
            for (let j = 0; j < numberInput; j++) {
                if (i === 0 || i === numberInput - 1 || j === 0 || j === numberInput - 1) {
                    shapePre.innerHTML += `* `;
                }
                else {
                    shapePre.innerHTML += `  `;
                }
            }
            shapePre.innerHTML += `<br>`;
        }
    }
    else {
        shapePre.innerHTML = `Please input a number between 2 and 10`
    }
});