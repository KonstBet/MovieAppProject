
async function register() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    console.log(email)
    console.log(password)

    var res = await fetch('user/register', {
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

    var result = await res.json()
    console.log(result)

    if (result.email !== email && result.password !== password)
        console.log("ERROR")
    else window.location.href = '../login'
}

async function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    console.log(email)
    console.log(password)

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

    if (res.status !== 200) {
        console.log(res)
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

    var result = await res.json()
    console.log(result)

    window.location.href = '../'
}

async function logout() {

    var res = await fetch('user/logout', {
        method: 'GET',
    })

    window.location.href = '../'
}