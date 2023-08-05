const express = require("express");
const router = express.Router();
// import jwt
const { verifyToken } = require("../config/jwt");

router.use("/task", verifyToken, require("./TaskRoutes"));

router.use("/user", require("./UserRoutes.js"));
module.exports = router;
