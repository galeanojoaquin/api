const path = require("path");


class MailerServices {
    handlebarOptions = {
        viewEngine: {
          extName: ".handlebars",
          partialsDir: path.resolve("./src/assets/html"),
          defaultLayout: false,
        },
        viewPath: path.resolve("./src/assets/html"),
        extName: ".handlebars",
      };

      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: "licencias.miituzaingo@gmail.com",
          pass: "incpugpmdheptjpg",
        },
      });

      mailOptions = {
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
}

module.exports = MailerServices;
