const homeworkCompleted = document.getElementById("dropdown-onchange")
const homeworkTODO = document.getElementById("dropdown-onclick")

homeworkCompleted.addEventListener('change', () => {
    launchSelection(homeworkCompleted)
})

homeworkTODO.addEventListener('click', () => {
    launchSelection(homeworkTODO)
})

function launchSelection(inputArray) {
    if (inputArray.value != "select") {
        window.open(inputArray.value, "_blank")
        inputArray.value = "select"
    }
}