const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParesr = require('body-parser')
    //const fetsh = require('node-fetch')

const UserRoute = require('./routes/user')
const PlateRoute = require('./routes/plate')
mongoose.connect('mongodb://127.0.0.1:27017/calcalc2', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error ', (err) => {
    console.log(err)

})

db.once('open', () => {
    console.log('u did it ')
})

const app = express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
})
app.use(morgan('dev'))
app.use(bodyParesr.urlencoded({ extended: true }))
app.use(bodyParesr.json())
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is runing on port = ${PORT} `)
})

app.use('/api/user', UserRoute)
app.use('/api/plate', PlateRoute)
    //all js and code written by ayoub ghanaj in this project