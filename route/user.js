const express = require('express')
const user = require('../controller/user/user')
const login = require('../controller/user/login')
const verification = require('../controller/user/verification')
const bookdoctor = require('../controller/user/Doctorbook')
const Bookambulance = require('../controller/user/AmbulanceBook')
const singlebookdoctor = require('../controller/user/Getsingledoctorbook')
const singlebookambulance = require('../controller/user/Getsigleambulancebook')
const bookverification = require('../controller/user/Bookemail')
const Allambulcebook = require('../controller/user/Getallambulancebook')
const Alldoctorbook = require('../controller/user/Getallapoinmentbook')


const route = express.Router()

route.post('/signup', user)
route.post('/login', login)
route.post('/veri', verification)
route.post('/doc', bookdoctor)
route.post('/amb', Bookambulance)
route.get('/book/doc/:id', singlebookdoctor);
route.get('/book/ambu/:id', singlebookambulance);
route.post('/book/notify', bookverification)
route.get('/book/allambulance', Allambulcebook);
route.get('/book/alldoctor', Alldoctorbook);

module.exports = route;