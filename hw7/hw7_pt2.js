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

window.onload = checkCookie("name")

document.cookie.submit.addEventListener("click", () => {
    document.cookie = `name = ${document.cookie.personalName.value}; username = ${document.cookie.userName.value}`
    checkCookie("name")
})

document.cookie.clear.addEventListener("click", () => {
    document.cookie.inputForm.reset()
})

function checkCookie() {
    if (document.cookie === null) {
        document.cookie.inputForm.style.visibility = "visible"
        document.cookie.greeting.innerHTML = ""
        document.cookie.greeting.style.visibility = "hidden"
    }
    else {
        let name = decodeCookie("name")
        if (name != "" && name != null) {
            document.cookie.inputForm.style.visibility = "hidden"
            document.cookie.greeting.innerHTML = `Hello and Welcome Back ${name}!`
            document.cookie.greeting.style.visibility = "visible"
        }
    }
}

function decodeCookie(cname) {
    // let decode = decodeURIComponent(el.pageCookies)
    let name = `${cname} =`
    for (let x = 0; x < document.cookie.split(";").length; x++) {
        let c = document.cookie.split("; ")[x]
        if (c.indexOf(cname) === 0) {
            return c.substring(name.length, c.length)
    }
    }
}