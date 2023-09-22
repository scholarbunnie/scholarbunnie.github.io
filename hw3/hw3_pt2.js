const commissionForm = document.querySelectorAll()
const clearForm = document.getElementById("clear")
const submit = document.getElementById("submit")
const inputName = document.getElementById("input-name")
const inputQty = document.getElementsByClassName("input-qty")
const qtySold = document.getElementsByClassName("qty-sold")
const totalCost = document.getElementsByClassName("total-cost")
let finalAmt = document.getElementById("final-amt")
let finalEarnings = document.getElementById("final-earnings")
const priceList = document.getElementsByClassName("price-list")

inputName.onkeydown = (e) => {
    if (!((e.key >= "a" && e.key <="z") || (e.key >= "A" && e.key <= "Z") || (e.key === "Tab") || (e.key === "Backspace") || (e.key === "Enter"))) {
        e.preventDefault();
    }
}

// for (let x = 0; x < priceList.length; x++) {
//     let price = parseFloat(priceList[x].innerHTML.replace("$", ""))
//     console.log(price)
//     console.log(typeof(price))
// }

for (let x = 0; x < inputQty.length; x++) {
    inputQty[x].onkeydown = (e) => {
        // // This is for if I have the quantity input boxes as text
        // if (!((e.key >= 0 && e.key <= 9) || (e.key === "Tab") || (e.key === "Backspace") || (e.getModifierState("Control"))) || (e.key === " ")) {
        //     e.preventDefault();
        // }
        if (e.key === "Enter") {
            submitInput()
        }
    }
}

clearForm.addEventListener("click", () => {
    inputName.value = "";
    finalAmt.value = ""
    for (let x = 0; x < inputQty.length; x++) {
        inputQty[x].value = "";
        qtySold[x].value = "";
        totalAmt[x].value = "";
        totalCost[x].value = "";
    }
})

submit.addEventListener("click", () => {
    if (inputName.value.length != 0) {
        submitInput()
    }
    else {
        inputName.placeholder = "Please Input a Name!"
        inputName.classList.add("no-name")
    }
})
console.log(inputName.onfocus)

inputName.onfocus = () => {
    inputName.classList.remove("no-name")
    inputName.placeholder = "Name"
}

function submitInput() {
    const prices = Array.from(priceList).map((price) => parseFloat(price.innerHTML.replace("$", "")));
    let totalAmt = 0
    let totalCostNum = 0
    for (let x = 0; x < inputQty.length; x++) {
        qtySold[x].value = inputQty[x].value
        if (inputQty[x].value === "") {
            qtySold[x].value = 0
        }
        totalCostNum = (parseInt(qtySold[x].value) * prices[x])
        totalCost[x].value = `$${totalCostNum.toFixed(2)}`
        totalAmt += totalCostNum
    }
    finalAmt.value = `$${totalAmt.toFixed(2)}`
    finalEarnings.value = `$${((totalAmt * 0.09) + 250).toFixed(2)}`
}