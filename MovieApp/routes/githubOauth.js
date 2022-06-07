let express = require('express');
let router = express.Router();

const axios = require('axios')
let userController = require('../controllers/user.controller')

const clientID = '6bd56548aa317270376c'
const clientSecret = '269fa6729d3be1e9b13b8dbcba909adb3dd1dffa'

router.get('/callback', (req, res) => {

    const requestToken = req.query.code

    axios({
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        // Set the content type header, so that we get the response in JSON
        headers: {
            accept: 'application/json'
        }
    }).then((response) => {

        let access_token = response.data.access_token

        axios.get('https://api.github.com/user', {
            headers: {
                Authorization: 'token ' + access_token
            }})
            .then(async resp => {
                console.log(resp.data)

                var jwt_token;
                jwt_token = await userController.findAuthAccount(resp.data.login, resp.data.email, "github");

                if (jwt_token === undefined) {
                    await userController.saveAuthAccount(resp.data.login, resp.data.email, "github");

                    jwt_token = await userController.findAuthAccount(resp.data.login, resp.data.email, "github");

                }

                res.cookie("authorization", 'Bearer '+jwt_token, {
                    maxAge: 3600000
                }).redirect("/")
            })
            .catch(_ => {

            })


    })
})

module.exports = router;