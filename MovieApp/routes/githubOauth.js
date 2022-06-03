let express = require('express');
let router = express.Router();

const axios = require('axios')
let userController = require('../controllers/user.controller')

const clientID = 'xxxxxxxxxxxx'
const clientSecret = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

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

        axios({
            method: 'get',
            url: `https://api.github.com/user`,
            headers: {
                Authorization: 'token ' + access_token
            }
        }).then(async (response) => {

            console.log(response.data)
            console.log(response.data.email)

            req.body.email = response.data.email
            req.body.password = ""

            await userController.find(req, res)
            console.log(res.statusCode)
            if (res.statusCode === 500) {
                await userController.save(req, res)
            }


        })
    })
})

module.exports = router;