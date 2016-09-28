const express = require('express')
const compression = require('compression')
const path = require('path')
const port = process.env.PORT || 8990
const app = express()

const serverRoutes = require('./routes/server')

app.use(compression())
app.use(express.static(__dirname + '/public'))

app.get('/server', serverRoutes)

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: __dirname })
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}.`)
})
