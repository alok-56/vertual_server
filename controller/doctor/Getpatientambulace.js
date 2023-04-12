const bookambulancemodel = require('../../Database/Schema/Bookambulance')

const getpatient = async (req, res) => {
    let data = await bookambulancemodel.find({ HospitalId: req.params.id })
    if (data) {
        res.send(data)
    }
}

module.exports = getpatient;