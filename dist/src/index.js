"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var usersRouter_1 = require("../usersRouter");
var app = express_1.default();
var port = 3003;
app.use(cors_1.default());
app.use(body_parser_1.default());
app.use('/users', usersRouter_1.router);
app.use(function (req, res) {
    res.send(404);
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
