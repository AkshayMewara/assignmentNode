const express = require('express');
require("./src/database/connection");
const logger = require('./src/utility/logger')

const router = require("./src/routes/book");
const userRouter = require('./src/routes/user')
const cors = require('cors');

const app = express();
const port = process.env.PORT || 9000;
app.use(cors());


app.get("/", async (req, res) => {
    res.send("welcome to book store");
})


app.use(express.json());

app.use(router);
app.use(userRouter);


app.listen(port, () => {
    logger.info(`connection is live at port no. ${port}`);
})