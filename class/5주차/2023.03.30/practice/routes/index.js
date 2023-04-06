const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.main);
//router.post("/axios2", controller.login);
router.post("axios2", controller.axios2);

module.exports = router;
