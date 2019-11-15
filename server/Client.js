const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientsSchema = new Schema({
    name : String,
    email : String,
    firstContact : { type: Date, default: Date.now },
    emailType : String,
    sold : {type:Boolean, default: false},
    owner : String,
    country : String
})

const Client = mongoose.model("Client", clientsSchema)

module.exports = Client