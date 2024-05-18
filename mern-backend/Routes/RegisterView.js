const express = require("express");
const { registerController } = require("../Controller/RegisterController");
const RegisterRoute = express.Router();
RegisterRoute.post("/register", registerController);

module.exports = { RegisterRoute };
