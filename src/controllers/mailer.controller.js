const { Router } = require("express");
const path = require("path");
const router = Router();
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");
const { MAIL, MAIL_PASSWORD } = require('../config');

const NodeMailerConfigService = require("../services/ConfigNodeMailerServices");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: MAIL,
        pass: MAIL_PASSWORD,
    },
});

const nodeMailerrConfigService = new NodeMailerConfigService();

const sendTurnConfirm = async (req, res) => {
    const { nombre, documento, telefono, email, tramite, fecha, horario, sede, codigo } = req.body;

    const handlebarOptions = nodeMailerrConfigService.getHandlebarOptions;
    const mailOptions = nodeMailerrConfigService.seTmailOptionsTurnConfirm(nombre, documento, telefono, email, tramite, fecha, horario, sede, codigo);

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

const sendTurnCancelledByCustomer = async (req, res) => {
    const { nombre, email, tramite, fecha, codigo } = req.body;

    const handlebarOptions = nodeMailerrConfigService.getHandlebarOptions;
    const mailOptions = nodeMailerrConfigService.seTmailOptionsTurnCancellByCustomer(nombre, email, tramite, fecha, codigo);

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

const sendTurnRecoveryCode = async (req, res) => {
    const { codigo, email } = req.body;

    const handlebarOptions = nodeMailerrConfigService.getHandlebarOptions;
    const mailOptions = nodeMailerrConfigService.seTmailOptionsTurnRecoveryCode(email, codigo);

    transporter.use("compile", hbs(handlebarOptions));

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
            res.send("Email has been sent successfully!🚀");
        }
    });
};

const sendTurnCancelledByAdmin = async (req, res) => {
    const { nombre, email, tramite, fecha, codigo } = req.body;

    const handlebarOptions = nodeMailerrConfigService.getHandlebarOptions;
    const mailOptions = nodeMailerrConfigService.seTmailOptionsTurnCancellByCustomer(nombre, email, tramite, fecha, codigo);

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


module.exports = { sendTurnConfirm, sendTurnCancelledByCustomer, sendTurnRecoveryCode, sendTurnCancelledByAdmin };