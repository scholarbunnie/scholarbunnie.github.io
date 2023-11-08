const stateInput = document.getElementById("state")
const btnSubmit = document.getElementById("submit")
const btnClear = document.getElementById("clear")
const infoDisplay = document.getElementById("info-display")
const stateAbbr = ["AL", "AK", "AZ", "AR", "CA", "CO"]
const stateList = [["AL", "Alabama", "Montgomery", 4903185], ["AK", "Alaska", "Juneau", 731545], ["AZ", "Arizona", "Phoenix", 7278717], ["AR", "Arkansas", "Little Rock", 3017825], ["CA", "California", "Sacramento", 39512223], ["CO", "Colorado", "Denver", 5758736]]

stateInput.onkeydown = (e) => {
    if (!((e.key >= "a" && e.key <= "z") || (e.key >= "A" && e.key <= "Z") || (e.key === "Tab") || (e.key === "Backspace"))) {
    e.preventDefault();
    }
}

btnSubmit.addEventListener('click', () => {
    checkStateInput()
})

btnClear.addEventListener('click', () => {
    infoDisplay.innerHTML = ""
    document.getElementById("state-form").reset();
})

function checkStateInput() {
    for (let x = 0; x < stateList.length; x++) {
        if (stateInput.value.toLowerCase() === stateList[x][0].toLowerCase() || stateInput.value.toLowerCase() === stateList[x][1].toLowerCase()) {
            infoDisplay.innerHTML = `Thanks for your inquiry, here is the information you requested:<br>
            State abbreviation = ${stateList[x][0]}<br>
            State Name = ${stateList[x][1]}
            Capital = ${stateList[x][2]}<br>
            Population = ${stateList[x][3].toLocaleString()}`
            break;
        }
        else {
            infoDisplay.innerHTML = `Sorry, we do not have information about this state! We only have information about ${stateAbbr.join(", ")}`
        }
    }
}