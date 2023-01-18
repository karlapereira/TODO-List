const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const indexRouter = require("./routes/index");
const todoRouter = require("./routes/todo");

app.use("/", indexRouter);
app.use("/todos", todoRouter);

module.exports = app;