const formInfo = document.getElementById("form-info")
const userName = document.getElementById("name")
const userAge = document.getElementsByName("age")
const userBrowser = document.getElementsByName("browsers")
const movieGenres = document.getElementById("movie-genres")
const btnSubmit = document.getElementById("submit")
const btnClear = document.getElementById("clear")
const output = document.getElementById("output")
let info = []
const error = `<style="color:red;">`

btnSubmit.addEventListener('click', () => {
    checkName()
    checkInput(userAge)
    checkInput(userBrowser)
    checkDropdown(movieGenres)
    if (info.length != 4) {
        output.innerHTML = "Please make sure to enter all the information"
        info = []
    }
    else {
        output.innerHTML = "Thank you, your information has been submitted"
    }
})

btnClear.addEventListener('click', () => {
    formInfo.reset();
    output.innerHTML = ""
})

userName.onkeydown = (e) => {
    if (!((e.key >= "a" && e.key <="z") || (e.key >= "A" && e.key <= "Z") || (e.key === "Tab") || (e.key === "Backspace"))) {
        e.preventDefault();
    }
}

function checkName() {
    if (userName.value.length != 0) {
        info.push(userName.value)
    }
}

function checkInput(inputArray) {
    let tempInfo = []
    for (let x = 0; x < inputArray.length; x++) {
        if (inputArray[x].checked && inputArray[x].value != "select") {
            tempInfo.push(inputArray[x].value)
        }
    }
    if (tempInfo.length != 0) {
        info.push(tempInfo)
    }
}

function checkDropdown(inputArray) {
    if (inputArray.value != "select") {
        info.push(inputArray.value)
    }
}