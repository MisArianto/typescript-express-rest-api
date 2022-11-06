"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("router root dengan TS");
        });
    }
}
const port = 5000;
const app = new App().app;
app.listen(port);
