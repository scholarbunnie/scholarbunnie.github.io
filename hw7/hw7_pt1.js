const mainDiv = document.getElementById("main-div")
const inputForm = document.getElementById("input-form")
const inputBackgroundColor = document.getElementsByName("background")
const inputTextStyle = document.getElementsByName("text-style")
const inputFontSize = document.getElementById("font-size")

// const $ = document.querySelector.bind(document)
// let el = {
//     mainDiv: $(".main-div"),
//     inputForm: $("#input-form")
// }
// const x = document.querySelectorAll.bind(el.inputform)
// let formEl = {
//     backgroundColor: $(".background-color-input"),
//     textStyle: $(".text-style"),
//     fontSize: $("#font-size")
// }

inputForm.onchange = _ => {
    changeBackgroundColor()
    changeTextStyle()
    changeFontSize()
}

function changeBackgroundColor() {
    for (let x = 0; x < inputBackgroundColor.length; x++)
    if (inputBackgroundColor[x].checked){
        if (inputBackgroundColor[x].value === "pink-background") {
            mainDiv.style.backgroundColor = "rgb(255, 91, 233)"
        } 
        else if (inputBackgroundColor[x].value === "black-background") {
            mainDiv.style.backgroundColor = "rgb(0, 0, 0)"
        }
    }
}

function changeTextStyle() {
    for (let x = 0; x < inputTextStyle.length; x++) {
        if (inputTextStyle[x].checked) {
            mainDiv.classList.add(inputTextStyle[x].value)
        }
        if (!inputTextStyle[x].checked && mainDiv.classList.contains(inputTextStyle[x].value)) {
            mainDiv.classList.remove(inputTextStyle[x].value)
        }
    }
}

function changeFontSize() {
    if (inputFontSize.value != "select") {
    mainDiv.style.fontSize = `${inputFontSize.value}`
    }
}