//SERVER.JS

const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const roboDal = require('./dal')
// Register '.mustache' extension with The Mustache Express

app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.use(express.static('public'))
