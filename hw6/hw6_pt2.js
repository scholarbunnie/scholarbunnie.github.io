const storyForm = document.getElementById("story-form")
const textArea = document.getElementById("text-area")
const character = document.getElementById("character")
const submit = document.getElementById("submit")
const clear = document.getElementById("clear")
const output = document.getElementById("output-text")

if (submit) {
    submit.addEventListener("click", () => {
        textContainsChar()
    })
}

if (clear) {
    clear.addEventListener("click", () => {
        storyForm.reset()
    })
}

function textContainsChar() {
    charsInText = textArea.value.replace(new RegExp(`[^(${character.value})]`, "gmi"), "")
    let numCharacters = charsInText.length
    if (numCharacters > 0) {
        output.innerHTML = `The letter ${character.value} was found ${numCharacters} time(s) in the text you provided.`
    }
    else {
        // popupText.innerHTML = `Search character ${character.value} was not found in the content you typed`
        storyForm.reset()
        var popup = window.open("hw6_pt2_popup.html", "Error Window", "popup=true, width=300px, height=100px, left=100rem, bottom=300px")
        popup.document.getElementById("popup-text").innerHTML = `Search character ${character.value} was not found in the content you typed`
        if (close) {
            close.addEventListener("click", () => {
                window.close()
            })
        }
    }
}