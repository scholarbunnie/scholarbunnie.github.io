const forLoopTag = document.getElementsByClassName("for-loop")
const whileLoopTag = document.getElementsByClassName("while-loop")

// The variables for the sum and product of the loops
let forLoopProduct = 1
let forLoopSum = 0
let whileLoopProduct = 1
let whileLoopSum = 0

// This function sets the range with the correct step including the last number
const arrayRange = (start, stop, step) =>
    Array.from({length: (stop - start) / step + 1 },
    (value, index) => start + index * step);

const forLoopArray = arrayRange(5, 25, 4)
const whileLoopArray = arrayRange(3, 18, 3)

// Finds the product and sum using a for loop
function forLoopAnswers(tagName) {
    for (let x = 0; x < forLoopArray.length; x++) {
        forLoopProduct *= forLoopArray[x]
        if (x < forLoopArray.length - 1) {
            tagName[0].innerHTML += `${forLoopArray[x]} * `
        }
        else {
            tagName[0].innerHTML += `${forLoopArray[x]} = ${forLoopProduct.toLocaleString()}`
        }
        forLoopSum += forLoopArray[x]
        if (x < forLoopArray.length - 1) {
            tagName[1].innerHTML += `${forLoopArray[x]} + `
        }
        else {
            tagName[1].innerHTML += `${forLoopArray[x]} = ${forLoopSum.toLocaleString()}`
        }
    }
}

//  Finds the product and sum using a while loop
function whileLoopAnswers(tagName) {
    let x = 0
    while (x < whileLoopArray.length) {
        whileLoopSum += whileLoopArray[x]
        whileLoopProduct *= whileLoopArray[x]
        if (whileLoopArray[x] != whileLoopArray.slice(-1)) {
            tagName[0].innerHTML += `${whileLoopArray[x]} * `
        }
        else {
            tagName[0].innerHTML += `${whileLoopArray[x]} = ${whileLoopProduct.toLocaleString()}`
        }
        forLoopSum += whileLoopArray[x]
        if (whileLoopArray[x] != whileLoopArray.slice(-1)) {
            tagName[1].innerHTML += `${whileLoopArray[x]} + `
        }
        else {
            tagName[1].innerHTML += `${whileLoopArray[x]} = ${whileLoopSum.toLocaleString()}`
        }
        x += 1
    }
}

document.onload = forLoopAnswers(forLoopTag), whileLoopAnswers(whileLoopTag)
