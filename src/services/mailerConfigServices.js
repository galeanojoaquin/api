const path = require("path");
const nodemailer = require("nodemailer");

class MailerConfigService {
    getHandlebarOptions = {
        viewEngine: {
            extName: ".handlebars",
            partialsDir: path.resolve("./src/assets/html"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./src/assets/html"),
        extName: ".handlebars",
    };


    seTmailOptionsTurnConfirm(nombre, documento, telefono, email, tramite, fecha, horario, sede, codigo) {
        try {
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
            return mailOptions;
        } catch (error) {
            return error
        }
    }

    seTmailOptionsTurnCancellByCustomer(nombre, email, tramite, fecha, codigo) {
        try {
            const mailOptions = {
                from: "Municipalidad de ituzaingó <municipalidad@miituzaingo.gob.ar>", // sender address,
                to: email,
                subject: "Municipalidad de Ituzaingó | Cancelación de turno",
                template: "emailCancelled",
                context: {
                    nombre: nombre,
                    email: email,
                    fecha: fecha,
                    tramite: tramite,
                    codigo: codigo,
                },
            };
            return mailOptions;
        } catch (error) {
            return error
        }
    }

    seTmailOptionsTurnRecoveryCode(email, codigo) {
        try {
            const mailOptions = {
                from: "Municipalidad de ituzaingó <municipalidad@miituzaingo.gob.ar>", // sender address,
                to: email,
                subject: "Municipalidad de Ituzaingó | Código de turno",
                template: "emailRecoveryCode",
                context: {
                    codigo: codigo,
                },
            };
            return mailOptions;
        } catch (error) {
            return error
        }
    }

    seTmailOptionsTurnCancellByAdmin(nombre, email, tramite, fecha, codigo, motivo) {
        try {
            const mailOptions = {
                from: "Municipalidad de ituzaingó <municipalidad@miituzaingo.gob.ar>", // sender address,
                to: email,
                subject: "Municipalidad de Ituzaingó | Cancelación de turno",
                template: "emailCancelledAdmin",
                context: {
                    nombre: nombre,
                    email: email,
                    fecha: fecha,
                    tramite: tramite,
                    codigo: codigo,
                    motivo: motivo,
                },
            };
            return mailOptions;
        } catch (error) {
            return error
        }
    }

}


module.exports = MailerConfigService;