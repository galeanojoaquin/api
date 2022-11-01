const { Router } = require("express");
const path = require("path");
const router = Router();
const nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");


router.post("/turno-admin-cancel", async (req, res) => {

    console.log(req.body);
    const { nombre, email, tramite, fecha, codigo, motivo } = req.body;

    const handlebarOptions = {
      viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./src/assets/html"),
        defaultLayout: false,
      },
      viewPath: path.resolve("./src/assets/html"),
      extName: ".handlebars",
    };

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
      subject: "Municipalidad de Ituzaingó | Cancelación de turno",
      template: "emailCancelledAdmin",
      context: {
        nombre: nombre,
        email:email,
        fecha: fecha,
        tramite: tramite,
        codigo: codigo,
        motivo: motivo,
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
  });

  
module.exports = router;