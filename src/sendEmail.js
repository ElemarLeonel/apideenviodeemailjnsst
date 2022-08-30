require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = (to, from, subject, text) => {
    const msg = {
        to,
        from,
        subject,
        html: text
    }

    sgMail.send(msg, function (err, res) {
        if (err) {
            console.log("Email não enviado")
        } else {
            console.log("Email enviado")
        }
        })
}

module.exports = sendEmail