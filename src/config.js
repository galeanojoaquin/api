const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT || 3000;

const MAIL = process.env.MAIL;

const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

module.exports = {
  PORT,
  MAIL,
  MAIL_PASSWORD,
}