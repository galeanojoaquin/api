const { Router } = require("express");
const router = Router();

const {
    sendTurnConfirm,
    sendTurnCancelledByCustomer,
    sendTurnRecoveryCode,
    sendTurnCancelledByAdmin,
} = require("../controllers/mailer.controller");

router.post("/turnConfirm", sendTurnConfirm);
router.post("/turnCancelledByCustomer", sendTurnCancelledByCustomer);
router.post("/turnRecoveryCode", sendTurnRecoveryCode);
router.post("/turnCancelledByAdmin", sendTurnCancelledByAdmin);

module.exports = router;
