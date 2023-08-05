const express = require("express");
const router = express.Router();

router.use("/task", require("./TaskRoutes"));
router.use("/user", require("./UserRoutes.js"));
module.exports = router;
