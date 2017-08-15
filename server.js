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

//======================================
app.get('/index', function(request, response) {
  const robos = roboDal.getRobots();
  response.render('index', {robos: robos});
})


//=====================================
app.set('port', 3001)

app.listen(app.get('port'), function () {
  console.log('Application has started at port 3001')
})
