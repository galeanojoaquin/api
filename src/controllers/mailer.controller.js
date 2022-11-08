const { Router } = require("express");
const path = require("path");
const router = Router();
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
const { MAIL, MAIL_PASSWORD } = require('../config');

const NodeMailerrConfigService = require("../services/ConfigNodeMailerServices");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: MAIL,
        pass: MAIL_PASSWORD,
    },
});

const sendTurnoConfirm = async (req, res) => {
    const { nombre, documento, telefono, email, tramite, fecha, horario, sede, codigo } = req.body;

    const nodeMailerrConfigService = new NodeMailerrConfigService();
    const handlebarOptions = nodeMailerrConfigService.getHandlebarOptions;

    const mailOptions = nodeMailerrConfigService.seTmailOptionsTurnoConfirm(nombre, documento, telefono, email, tramite, fecha, horario, sede, codigo);

    transporter.use("compile", hbs(handlebarOptions));

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("Error al enviar email:", error);
        } else {
            console.log("Email enviado: " + info.response);
            res.send("El correo electrónico ha sido enviado con éxito!🚀");
        }
    });
};

module.exports = { sendTurnoConfirm };