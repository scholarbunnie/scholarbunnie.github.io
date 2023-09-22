const inputName = document.getElementById("input-name")
const inputQty = document.getElementsByClassName("input-qty")
const qtySold = document.getElementsByClassName("qty-sold")
const totalCost = document.getElementsByClassName("total-cost")
const finalAmt = document.getElementById("final-amt")
const finalEarnings = document.getElementById("final-earnings")
// document.onkeyup = checkKey
let isQty = true

for (x = 0; x < inputQty.length; x++) {
    inputQty[x].onkeyup = someFunction
}

function someFunction(e) {
    if (e.key >= 0 && e.key <= 9) {
        console.log(isQty)
    }
    else {
        isQty = false
        console.log(isQty)
    }
}