const $ = document.querySelector.bind(document)
let el = {
    greeting : $("#greeting"),
    inputForm : $("#input-form"),
    personalName : $("#name"),
    userName : $("#username"),
    submit : $("#submit"),
    clear : $("#clear"),
    pageCookies : $("cookie")
}

checkCookie("name")

el.submit.addEventListener("click", () => {
    el.pageCookies = `name = ${el.personalName.value}; username = ${el.userName.value}`
    checkCookie("name")
})

el.clear.addEventListener("click", () => {
    el.inputForm.reset()
})

function checkCookie() {
    if (el.pageCookies === null) {
        el.inputForm.style.visibility = "visible"
        el.greeting.innerHTML = ""
        el.greeting.style.visibility = "hidden"
    }
    else {
        let name = decodeCookie("name")
        if (name != "" && name != null) {
            el.inputForm.style.visibility = "hidden"
            el.greeting.innerHTML = `Hello and Welcome Back ${name}!`
            el.greeting.style.visibility = "visible"
        }
    }
}

function decodeCookie(cname) {
    // let decode = decodeURIComponent(el.pageCookies)
    let name = `${cname} = `
    for (let x = 0; x < el.pageCookies.split(";").length; x++) {
        let c = el.pageCookies.split("; ")[x]
        if (c.indexOf(cname) === 0) {
            return c.substring(name.length, c.length)
    }
    }
}