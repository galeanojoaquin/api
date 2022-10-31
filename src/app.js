const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
 
//Routes
const mailingRoutes = require ("./routes/mailing.routes");

const app = express();

//Settings
app.set("port", 4000);

// Middelwares

app.use(cors())
app.use(morgan("dev")); 
app.use(express.json());

//Routes
app.use('/mailer', mailingRoutes);


module.exports = app;