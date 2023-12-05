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
console.log(document.cookie)

el.submit.addEventListener("click", () => {
    document.cookie = `name = ${el.personalName.value}; username = ${el.userName.value}`
    checkCookie("name")
})

el.clear.addEventListener("click", () => {
    el.inputForm.reset()
})

function checkCookie() {
    if (document.cookie === null) {
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
    let name = `${cname}=`
    for (let x = 0; x < document.cookie.split(";").length; x++) {
        let c = document.cookie.split("; ")[x]
        if (c.indexOf(cname) === 0) {
            return c.substring(name.length, c.length)
    }
    }
}
