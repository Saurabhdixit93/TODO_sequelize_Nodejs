const express = require("express");
const { sequelize } = require("./config/Db");
const dotenv = require("dotenv").config();
const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", require("./routers"));

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
