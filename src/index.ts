import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import {router} from "../usersRouter";


const app = express()
const port = 3003

app.use(cors())

app.use(bodyParser());

app.use('/users', router);


app.use((req, res) => {
    res.send(404);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
