"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var usersRouter_1 = require("./usersRouter");
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
var port = 3003;
// @ts-ignore
mongoose_1.default.connect('mongodb://localhost/users', { useNewUrlParser: true });
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
    console.log('we\'re connected');
});
var usersScheme = new mongoose_1.default.Schema({
    name: String
});
exports.User = mongoose_1.default.model('User', usersScheme);
app.use(cors_1.default());
app.use(body_parser_1.default());
app.use('/users', usersRouter_1.router);
app.use(function (req, res) {
    res.send(404);
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
