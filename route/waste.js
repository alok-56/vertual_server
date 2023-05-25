const express = require('express')
const postwaste = require('../controller/Waste/wastepost')

const router = express.Router()

router.post('/postwaste', postwaste);

module.exports = router;