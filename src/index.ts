import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import {router} from "./usersRouter";
import mongoose from "mongoose";

const app = express()
const port = 3003

// @ts-ignore
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (){
    console.log('we\'re connected')
})

let usersScheme = new mongoose.Schema({
    name: String
})

export let User = mongoose.model('User', usersScheme)

app.use(cors())

app.use(bodyParser());

app.use('/users', router);


app.use((req, res) => {
    res.send(404);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
