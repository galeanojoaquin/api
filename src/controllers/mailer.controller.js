const path = require("path");
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");

const HandlerbarOptionsServices = require("../services/ConfigNodeMailerServices");


const sendTurnoConfirm = async (req, res) => {
    // console.log(req.body);
    const { nombre, documento, telefono, email, tramite, fecha, horario, sede, codigo } =
        req.body;

    const handlebarOptionsServices = new HandlerbarOptionsServices();
    const handlebarOptions = handlebarOptionsServices.handlebarOptions;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "licencias.miituzaingo@gmail.com",
            pass: "incpugpmdheptjpg",
        },
    });

    transporter.use("compile", hbs(handlebarOptions));

    const mailOptions = {
        from: "Municipalidad de ituzaingó <municipalidad@miituzaingo.gob.ar>", // sender address,
        to: email,
        subject: "Municipalidad de Ituzaingó | Confirmación de turno",
        template: "email",
        context: {
            nombre: nombre,
            documento: documento,
            telefono: telefono,
            email: email,
            tramite: tramite,
            fecha: fecha,
            horario: horario,
            sede: sede,
            codigo: codigo,
        },
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
            res.send("Email has been sent successfully!🚀");
        }
    });
};

module.exports = { sendTurnoConfirm };