const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
 
//Routes
const turnoConfirm = require ("./routes/licenciasTurnoConfirm.routes");
const adminCancel = require ("./routes/licenciasAdminCancel.routes");
const recoveryCode = require ("./routes/licenciasRecoveryCode.routes");
const turnoCancel = require ("./routes/licenciasTurnoCancel.routes");

const app = express();

//Settings
app.set("port", 4000);

// Middelwares

app.use(cors())
app.use(morgan("dev")); 
app.use(express.json());

//Routes
app.use('/mailer', turnoConfirm);
app.use('/mailer', adminCancel);
app.use('/mailer', recoveryCode);
app.use('/mailer', turnoCancel);


module.exports = app;