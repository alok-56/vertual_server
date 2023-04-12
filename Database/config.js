const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Health', {
    family: 4,
}).then((res) => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err, "not connnected")
})