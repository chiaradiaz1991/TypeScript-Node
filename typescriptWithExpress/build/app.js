"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var port = process.env.PORT || 3000;
//new express instance
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.listen(port, function () {
    console.log("Example app listening in port " + port + "!");
});
//# sourceMappingURL=app.js.map