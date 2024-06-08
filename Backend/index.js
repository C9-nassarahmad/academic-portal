const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./model/db");
//routers
const bodyParser = require('body-parser');
const userModel = require('./model/user');
const courseModel = require('./model/course');
const routes = require('./routes');
const app = express();


//built-in middleware
app.use(express.json());
app.use(cors());
app.use('/', routes);
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});