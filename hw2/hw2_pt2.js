const btnSubmit = document.getElementById("submit")
const btnClear = document.getElementById("clear")
const textArea = document.getElementById("text-area")
const numbers = document.getElementsByClassName("numbers")
let numList = []
let sum = 0
let avg = 0
let product = 1

// clears the inputs and the text area
btnClear.addEventListener('click', () => {
    for (let x = 0; x < numbers.length; x++) {
        numbers[x].value = ""
    }
    textArea.innerText = ""
})

btnSubmit.addEventListener('click', () => {
    for (let x = 0; x < numbers.length; x++) {
        // checks for if input is just one number/ spaces inbetween numbers makes it invalid input.
        if (numbers[x].value.trim() && !isNaN(+numbers[x].value)) {
            numList.push(+numbers[x].value)
        }
        // gives error message if there is invalid input but does not clear the form to allow user to correct their input
        else {
            textArea.innerText = "Please enter only numbers. Thank you! :)"
            numList = []
            break
        }
    }
    if (numList.length == numbers.length) {
        computeValues()
        // spreads the array so that the min and max functions can see all the numbers without needing to iterate through a for loop.
        let smallest = Math.min(...numList)
        let largest = Math.max(...numList)
        textArea.innerHTML = `The sum of all the numbers is ${sum}<br>
                            The average of all the numbers is ${avg}<br>
                            The product of all the numbers is ${product}<br>
                            The smallest number is ${smallest}<br>
                            The largest number is ${largest}`
    }
});

// This puts the math in the same function to be done at one time in a for loop
function computeValues() {
    for (let x = 0; x < numList.length; x++){
        sum += numList[x]
        product *= numList[x]
    }
    avg = sum/numList.length
}

// takes in the inputs and checks if each one is a number
// using while loop adds number as int type to list
// if an input is not a number stop loop and post error on page
    // clear list to receive input again
    // don't reset values in form so user can correct

// clear button needs to clear the form/reset form

// use the list of ints to find sum, avg, product of all numbers
// find smallest and largest

//display results in a text area/div
