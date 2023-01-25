const express = require("express");
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const indexRouter = require("./routes/v1/index");
const indexRouter2 = require("./routes/v2/index2");
const todoRouter = require("./routes/v1/todo");

app.use("/", indexRouter);
app.use("/v2", indexRouter2);
app.use("/todos", todoRouter);

module.exports = app;