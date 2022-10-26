import express from "express"
import morgan from "morgan"
var cors = require('cors')
//Routes
import mailingRoutes from "./routes/mailing.routes";

const app = express();

//Settings
app.set("port", 4000);

// Middelwares

app.use(cors())
app.use(morgan("dev")); 

//Routes
app.use(mailingRoutes);


export default app;