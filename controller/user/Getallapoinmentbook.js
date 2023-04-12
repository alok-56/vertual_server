const bookdoctormodel = require('../../Database/Schema/Bookambulance');

const Alldoctorbook = async (req, res) => {
    let booklist = await bookdoctormodel.find({ Patientid: req.body.id });
    if (booklist) {
        res.send(booklist)
    }
}

module.exports = Alldoctorbook;