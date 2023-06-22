const express = require('express')
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const userController = require('./Controller/userController');

app.use(bodyParser.json());
app.use("/users", userController);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})