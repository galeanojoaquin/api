const { Router } = require("express");
const router = Router();

const {
    sendTurnoConfirm,
} = require("../controllers/mailer.controller");

router.post("/turno-confirm", sendTurnoConfirm);


module.exports = router;
