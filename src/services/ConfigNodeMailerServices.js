const path = require("path");
const nodemailer = require("nodemailer");

class NodeMailerrConfigService {
    getHandlebarOptions = {
        viewEngine: {
            extName: ".handlebars",
            partialsDir: path.resolve("./src/assets/html"),
            defaultLayout: false,
        },
        viewPath: path.resolve("./src/assets/html"),
        extName: ".handlebars",
    };


    seTmailOptions(nombre, documento, telefono, email, tramite, fecha, horario, sede, codigo) {
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


}


module.exports = NodeMailerrConfigService;