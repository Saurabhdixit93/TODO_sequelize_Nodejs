const express = require("express");
const router = express.Router();

const userController = require("../controller/UserController");

router.post("/signiu", userController.signup);
router.post("/login", userController.login);

module.exports = router;
