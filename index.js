const express = require('express');
const app = express()
const bodyparser=require('body-parser')
require('./Database/config')


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json()) 



//--------router---------------
const user = require('./route/user')
const doctor=require('./route/doctor')

//---------route-------------
app.use('/user',user)
app.use('/doctor',doctor)


//-------------port-------------
app.listen(4500, () => {
    console.log("app is running on port", 4500)
})