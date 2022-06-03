let client_id = "6bd56548aa317270376c"

const query = window.location.search.substring(1)
const token = query.split('access_token=')[1]

if (token !== undefined)
    loginViaGithub(token)


async function register() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    console.log(email)
    console.log(password)

    let res = await registerFetch(email, password)

    var result = await res.json()
    console.log(result)

    if (result.email !== email && result.password !== password)
        console.log("ERROR")
    else window.location.href = '../login'
}

async function registerFetch(email, password) {

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

    return res
}

async function login() {
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    console.log(email)
    console.log(password)

    let res = await loginFetch(email, password)

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

function loginViaGithub(token) {

    console.log("AAA")
    fetch('https://api.github.com/user', {
        headers: {
            Authorization: 'token ' + token
        }
    })
    .then(res => res.json())
    .then(async res => {
        let resp = await loginFetch(res.email,"")

        if (resp.status !== 200) {
            await registerFetch(res.email,"");
            await loginFetch(res.email,"")
        }

        window.location.href = '../'
    })
}

async function logout() {

    var res = await fetch('user/logout', {
        method: 'GET',
    })

    window.location.href = '../'
}