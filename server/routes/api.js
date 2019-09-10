const express = require('express')
const Client = require('../Client')
const router = express.Router()
const bodyParser = require('body-parser')
const data = require('../../src/data.json')


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})


router.post('/add_client', (req, res) => {
    const obj = new Client(req.body)
    obj.save()
    res.end()
})

router.put('/update_client', (req,res) => {
    const obj = req.body
    Client.findByIdAndUpdate(obj._id, obj, { new: true }, function (err, result) {
        err ? res.send(false) : res.send(true)
    })
})

router.get('/clients',(req,res)=>{
    Client.find({}, (err, result) => res.send(result))
})

// data.forEach(d=>{
//     const obj = new Client (d)
//     obj.save()
// })


module.exports = router