const express = require('express')
const app = express()

//creating route
app.get('/', (req, res) => {
    res.send("Hello, world.")
})

//starting server
app.listen(3000, () => {
    console.log('Server running.')
})