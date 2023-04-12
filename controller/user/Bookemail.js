const nodemailer = require('nodemailer')

const bookverification = async (req, res) => {
    let Email = req.body.email;
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "easypeasy11746@gmail.com",
            pass: "eyqunwdhrpkbzvwg"
        }
    })
    const mailOptions = {
        from: "easypeasy11746@gmail.com",
        to: Email,
        subject: "Your otp is",
        text: `Hello sir your booking is sucessfully done`
    }
    transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(info)
        }
    })

}


module.exports = bookverification;




