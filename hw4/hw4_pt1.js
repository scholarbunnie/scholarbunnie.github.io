// Creating elements to be posted in html
const for_loop_div = document.createElement("div")
const while_loop_div = document.createElement("div")

function createPtag(div) {
    var paragraph = document.createElement("p")
    return div.appendChild(paragraph)
}

for (let x = 0; x < 3; x++) {
    createPtag(for_loop_div).classList.add(`${Object.keys({for_loop_div})[0]}`)
    createPtag(while_loop_div).classList.add(`${Object.keys({while_loop_div})[0]}`)
}

document.body.firstElementChild.insertAdjacentElement("afterend", for_loop_div).insertAdjacentElement("afterend", while_loop_div)

// The variables for the sum and product of the loops
let for_loop_sum = 0
let for_loop_product = 1
let while_loop_sum = 0
let while_loop_product = 1

// This function sets the range with the correct step including the last number
const arrayRange = (start, stop, step) =>
    Array.from({length: (stop - start) / step + 1 },
    (value, index) => start + index * step);

const for_loop_array = arrayRange(5, 25, 4)
const while_loop_array = arrayRange(3, 18, 3)

// Finds the product and sum using a for loop
function for_loop_answers(className) {
    let element = document.getElementsByClassName(className)
    element[0].innerHTML = `<h2>Using a For Loop for Product and Sum</h2>`
    element[1].innerHTML = `<p><h4>Product of every 4th integer from 5 to 25 inclusive</h4></p>`
    element[2].innerHTML = `<p><h4>Sum of every 4th integer from 5 to 25 inclusive</h4></p>`
    for (let x = 0; x < for_loop_array.length; x++) {
        for_loop_product *= for_loop_array[x]
        if (for_loop_array[x] != for_loop_array.slice(-1)) {
            element[1].innerHTML += `${for_loop_array[x]} * `
        }
        else {
            element[1].innerHTML += `${for_loop_array[x]} = ${for_loop_product.toLocaleString()}`
        }
        for_loop_sum += for_loop_array[x]
        if (for_loop_array[x] != for_loop_array.slice(-1)) {
            element[2].innerHTML += `${for_loop_array[x]} + `
        }
        else {
            element[2].innerHTML += `${for_loop_array[x]} = ${for_loop_sum.toLocaleString()}`
        }
    }
}

//  Finds the product and sum using a while loop
function while_loop_answers(className) {
    let x = 0
    let element = document.getElementsByClassName(className)
    element[0].innerHTML = `<h2>Using a While Loop for Product and Sum</h2>`
    element[1].innerHTML = `<p><h4>Product of every 3rd integer from 3 to 18 inclusive</h4></p>`
    element[2].innerHTML = `<p><h4>Sum of every 3rd integer from 3 to 18 inclusive</h4></p>`
    while (x < while_loop_array.length) {
        while_loop_sum += while_loop_array[x]
        while_loop_product *= while_loop_array[x]
        if (while_loop_array[x] != while_loop_array.slice(-1)) {
            element[1].innerHTML += `${while_loop_array[x]} * `
        }
        else {
            element[1].innerHTML += `${while_loop_array[x]} = ${while_loop_product.toLocaleString()}`
        }
        for_loop_sum += while_loop_array[x]
        if (while_loop_array[x] != while_loop_array.slice(-1)) {
            element[2].innerHTML += `${while_loop_array[x]} + `
        }
        else {
            element[2].innerHTML += `${while_loop_array[x]} = ${while_loop_sum.toLocaleString()}`
        }
        x += 1
    }
}

document.onload = for_loop_answers("for_loop_div"), while_loop_answers("while_loop_div")
