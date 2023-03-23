const express = require("express");
const { port, db } = require("./config/config");
const TodoRouter = require("./route/todo");

const app = express();
db();
app.use(express.json());
app.use("/", TodoRouter);

app.listen(port, console.log(port));
