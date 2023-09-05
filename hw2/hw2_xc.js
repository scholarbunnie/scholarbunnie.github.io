const userinput = document.getElementById("input")
const rate = document.getElementsByClassName("rate")
const currency = document.getElementsByClassName("currency")
const submit = document.getElementById("submit")
const message = document.getElementById("message")
userinput.onkeyup = checkValue

function checkValue() {
    for (let x = 0; x < rate.length; x++) {
        if (userinput.value && !isNaN(+userinput.value)) {
            exchangedCurrency = +rate[x].innerHTML * +userinput.value
            currency[x].innerHTML = parseFloat(exchangedCurrency).toFixed(2)
        }
        else {
            if (userinput.value.length === 0) {
                message.innerHTML = ""
            }
            else {
            message.innerHTML = "Please input a valid amount"
            break
            }
        }
    }
}

// 