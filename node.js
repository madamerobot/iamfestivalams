const express = require('express')
const app = express()

const bodyParser = require('body-parser') //this parses the body of each request

app.use('/', express.static('public')) //opening the localhost port and turning it public

const listener = app.listen(3000, () => {
	console.log('server has started')
})

app.get('/', (request, response) => {
	console.log('Your page is being rendered')
	response.sendFile('/public/index.html');
})

// // GET method route
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage')
// })

// // POST method route
// app.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// })