const phoneNumber = document.getElementById("phone-number")
const output = document.getElementById("output-text")
const phoneNumberForm = document.getElementById("phone-number-form")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const splitPhoneNumberDisplay = document.getElementsByClassName("split-number")

phoneNumber.onkeydown = (e) => {
    if (!((e.key >= 0 && e.key <= 9) || (["(", ")", "-", "Backspace", "Tab"].includes(e.key)) || (e.getModifierState("Control")))) {
       e.preventDefault();
    }
   }

submit.addEventListener("click", () => {
    if (output.classList.contains("output-error")) {
        output.classList.remove("output-error")
    }
    output.innerHTML = ``
    splitPhoneNumber()
})

clear.addEventListener("click", () => {
    if (output.classList.contains("output-error")) {
        output.classList.remove("output-error")
    }
    output.innerHTML = ``
    phoneNumberForm.reset()
})

function splitPhoneNumber() {
    if (/^[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}$/.test(phoneNumber.value)) {
        var regexMatch = phoneNumber.value.match(/\b[0-9]+\b/g)
        for (let x = 0; x < splitPhoneNumberDisplay.length; x++) {
            splitPhoneNumberDisplay[x].value = regexMatch[x]
        }
    }
    else {
        output.classList.add("output-error")
        output.innerHTML = `Please provide a phone number in the valid format<br>(000)000-0000`
    }
}