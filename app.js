const express = require('express');
require("./src/database/connection");

const router = require("./src/routes/book");
const userRouter = require('./src/routes/user')


const app = express();
const port = process.env.PORT || 9000;

app.get("/", async (req, res) => {
    res.send("welcome to book store");
})


app.use(express.json());

app.use(router);
app.use(userRouter);


app.listen(port, () => {
    console.log(`connection is live at port no. ${port}`);
})