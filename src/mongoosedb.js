const mongoose = require("mongoose");

const user = "admin";
const pass = "admin12345";
const database = "todo_sample";
const serverName = "cluster0.teste.mongodb.net";

module.exports = {
    init: () => {
        mongoose
        .connect(
            `mongodb+srv://${user}:${pass}@${serverName}/${database}?retryWrites=true&w=majority`,
            {
                userNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: true,
                useCreateIndex: true
            }
        )
        .then((res) => console.log(`Connection Succesful ${res}`))
        .catch((err) => console.log(`Error in DB connection ${err}`));
    }
}