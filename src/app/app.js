const express = require("express");

const app = express()
app.get('/', (req, res) =>{
    res.send('este es mi backend')
})
module.exports = app;