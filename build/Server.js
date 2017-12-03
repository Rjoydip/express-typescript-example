"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = require("./App");
var port = 3000;
App_1.default.listen(port, function (err) {
    if (err) {
        return console.log(err);
    }
    return console.log("Server is listening on " + port);
});
