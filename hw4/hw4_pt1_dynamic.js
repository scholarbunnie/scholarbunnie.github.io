// Creating elements to be posted in html
const forLoopDiv = document.createElement("div")
const whileLoopDiv = document.createElement("div")

function createPtag(div) {
    var paragraph = document.createElement("p")
    return div.appendChild(paragraph)
}

for (let x = 0; x < 3; x++) {
    createPtag(forLoopDiv).classList.add(`${Object.keys({for_loop_div: forLoopDiv})[0]}`)
    createPtag(whileLoopDiv).classList.add(`${Object.keys({while_loop_div: whileLoopDiv})[0]}`)
}

document.body.firstElementChild.insertAdjacentElement("afterend", forLoopDiv).insertAdjacentElement("afterend", whileLoopDiv)

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
function forLoopAnswers(className) {
    let element = document.getElementsByClassName(className)
    element[0].innerHTML = `<h2>Using a For Loop for Product and Sum</h2>`
    element[1].innerHTML = `<p><h4>Product of every 4th integer from 5 to 25 inclusive</h4></p>`
    element[2].innerHTML = `<p><h4>Sum of every 4th integer from 5 to 25 inclusive</h4></p>`
    for (let x = 0; x < forLoopArray.length; x++) {
        forLoopProduct *= forLoopArray[x]
        if (forLoopArray[x] != forLoopArray.slice(-1)) {
            element[1].innerHTML += `${forLoopArray[x]} * `
        }
        else {
            element[1].innerHTML += `${forLoopArray[x]} = ${forLoopProduct.toLocaleString()}`
        }
        forLoopSum += forLoopArray[x]
        if (forLoopArray[x] != forLoopArray.slice(-1)) {
            element[2].innerHTML += `${forLoopArray[x]} + `
        }
        else {
            element[2].innerHTML += `${forLoopArray[x]} = ${forLoopSum.toLocaleString()}`
        }
    }
}

//  Finds the product and sum using a while loop
function whileLoopAnswers(className) {
    let x = 0
    let element = document.getElementsByClassName(className)
    element[0].innerHTML = `<h2>Using a While Loop for Product and Sum</h2>`
    element[1].innerHTML = `<p><h4>Product of every 3rd integer from 3 to 18 inclusive</h4></p>`
    element[2].innerHTML = `<p><h4>Sum of every 3rd integer from 3 to 18 inclusive</h4></p>`
    while (x < whileLoopArray.length) {
        whileLoopSum += whileLoopArray[x]
        whileLoopProduct *= whileLoopArray[x]
        if (whileLoopArray[x] != whileLoopArray.slice(-1)) {
            element[1].innerHTML += `${whileLoopArray[x]} * `
        }
        else {
            element[1].innerHTML += `${whileLoopArray[x]} = ${whileLoopProduct.toLocaleString()}`
        }
        forLoopSum += whileLoopArray[x]
        if (whileLoopArray[x] != whileLoopArray.slice(-1)) {
            element[2].innerHTML += `${whileLoopArray[x]} + `
        }
        else {
            element[2].innerHTML += `${whileLoopArray[x]} = ${whileLoopSum.toLocaleString()}`
        }
        x += 1
    }
}

document.onload = forLoopAnswers("for_loop_div"), whileLoopAnswers("while_loop_div")
