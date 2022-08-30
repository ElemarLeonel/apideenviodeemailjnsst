const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json())

const sendEmail = require("./src/sendEmail")
require('dotenv').config()

const port = process.env.PORT || 5000
const EMAIL_SEND = process.env.EMAIL_SEND
const EMAIL_RECEIVE = process.env.EMAIL_RECEIVE

app.post("/email", (req, res) => {

  const fullname = req.body.fullname
  const email = req.body.email
  const title = req.body.title
  const message = req.body.message

  const from = EMAIL_SEND
  const to = EMAIL_RECEIVE
  const subject = `Uma mensagem nova chegou`
  const text = `
    <p> Um novo contato chegou ao email
    <h3>Detalhes do contato:</h3>
    <ul>
      <li>Nome Completo: ${fullname}</li>
      <li>Email: ${email}</li>
      <li>Título: ${title}</li>
      <li>Mensagem: ${message}</li>   
    </ul>
  `

  sendEmail(to, from, subject, text)
  return res.json(req.body)
})

app.listen(port, () => {
  console.log("Servidor está rodando...");
})