
async function register() {
    var username = document.getElementById("username").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    let res = await registerFetch(username, email, password)

    if (res.status !== 200) {
        document.getElementById("username").style = "color:red;"
        document.getElementById("email").style = "color:red;"
        document.getElementById("password").style = "color:red;"

        document.getElementById("username").onclick = () => {
            document.getElementById("username").style = "color: #1F1F1F;"
        }
        document.getElementById("email").onclick = () => {
            document.getElementById("email").style = "color: #1F1F1F;"
        }
        document.getElementById("password").onclick = () => {
            document.getElementById("password").style = "color: #1F1F1F;"
        }
        return
    }
    else window.location.href = '../login'
}

async function registerFetch(username, email, password) {

    var res = await fetch('user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })

    return res
}

async function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value


    let res = await loginFetch(email, password)

    if (res.status !== 200) {
        document.getElementById("email").style = "color:red;"
        document.getElementById("password").style = "color:red;"

        document.getElementById("email").onclick = () => {
            document.getElementById("email").style = "color: #1F1F1F;"
        }
        document.getElementById("password").onclick = () => {
            document.getElementById("password").style = "color: #1F1F1F;"
        }
        return
    }

    window.location.href = '../'
}

async function loginFetch(email, password) {

    var res = await fetch('user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })

    return res
}

async function logout() {

    var res = await fetch('user/logout', {
        method: 'GET',
    })

    window.location.href = '../'
}