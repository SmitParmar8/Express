const express = require('express')
const app = express()
const port = 3000
// testing the api's
app.get('/', (req, res) => {
    console.log("user request catched ")
  res.status(200).send('Hello World!')
})
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
app.delete('/user', (req, res) => {
  console.log("able to hit the route ")
  res.end();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
