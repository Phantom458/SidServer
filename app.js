var express = require('express')
var app = express()
var port=3000;
app.get('/marco', (req, res) => {
    res.send('kald is gay')
})
app.put('/marco', (req, res) => {
    res.send('kald is gonna buy me dinner')
})
app.listen(port, () => {
    console.log(`server ${port} started`)
})