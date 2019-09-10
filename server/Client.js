const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientsSchema = new Schema({
    name : String,
    email : String,
    firstContact : Date,
    emailType : String,
    sold : Boolean,
    owner : String,
    country : String
    // surname : String
})

const Client = mongoose.model("Client", clientsSchema)

module.exports = Client