const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const Todos = require("./Routes/TodoRoutes");
const app = express();

require("dotenv").config();

mongoose
  .connect("mongodb://localhost:27017/InterviewTask")
  .then(() => console.log("Connected to Database"))
  .catch((er) => console.log("could not connect", er));

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use("/api/todo", Todos);

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listineing on port ${port}`);
});
