"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRouter_1 = require("./usersRouter");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3003;
app.use((0, cors_1.default)());
app.use((0, body_parser_1.default)());
app.use('/users', usersRouter_1.router);
app.use((req, res) => {
    res.send(404);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
