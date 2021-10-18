const express = require('express')
const app = express()
const port = 8080

let counter = 0

app.get('/', (req, res) => {
  res.send(`counter: ${counter}`)
})

app.get('/stat', (req, res) => {
  res.send(`counter: ${counter}`)
  counter++
})

app.get('/about', (req, res) => {
  res.send('<h3>Hello, dear friend!<h3>')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})

