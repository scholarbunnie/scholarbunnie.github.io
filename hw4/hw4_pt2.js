// Below the heading you will code a script to show 3 tables with the calculation of compound interest on a principal of $1000.
const tableDiv = document.getElementById("div-table")
const startYear = 1
const endYear = 5
const minInterest = .05
const maxInterest = .07
const initialDeposit = 1000

// function will create a table for each interest rate
function createTable(interest) {
    const pTag = document.createElement("p")
    let newTable = document.createElement("table")
    tableDiv.appendChild(pTag).setAttribute("id", `${interest}% interest`)
    pTag.appendChild(newTable)
    // insert table header
    let row = newTable.createTHead().insertRow(0)
    row.insertCell(0).outerHTML = `<th>Year</th>`
    row.insertCell(1).outerHTML = `<th>Amount on Deposit</th>`
    row.insertCell(2).outerHTML = `<th>Interest Rate</th>`
    row.style.backgroundColor = "#f0d5eb"
    // inserts table data to table body
    newTable = newTable.createTBody()
    for (let y = startYear; y <= endYear; y++) {
        // starts row index at 0
        row = newTable.insertRow(y - 1)
        row.insertCell(0).innerHTML = `${y}`
        row.insertCell(1).innerHTML = `${findInterest(initialDeposit, interest, y).toFixed(2)}`
        row.insertCell(2).innerHTML = `${interest.toFixed(2)}`
        if (y % 2 == 0) {
            row.classList.add("Even")
            row.style.backgroundColor = "#a37f9c"
        }
        else {
            row.classList.add("Odd")
            row.style.backgroundColor = "#694f64"
        }
    }
}

function findInterest(deposit, interest, year) {
    return deposit*(1+interest)**year
}

for (let x = minInterest; x <= maxInterest; x += .01) {
    createTable(x)
}