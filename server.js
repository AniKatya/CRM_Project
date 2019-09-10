const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const app = express()

const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/client")

app.use('/', api)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.listen(process.env.PORT || 5000, function() {
    console.log("Server running : port 5000")
  })

