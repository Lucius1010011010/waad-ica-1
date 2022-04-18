const express = require('express')
const app = express()
const routes = require('./routes')

//routes
app.use(('/'), routes)

//catching all and sending 404
app.use((req, res, next) => {
    res.sendStatus(404)
})

//starting server
app.listen(3000, () => {
    console.log("Server running.")
})