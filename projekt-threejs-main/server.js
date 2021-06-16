//zmienne, stałe

var express = require("express")
var app = express()
const PORT = 3000;
var path = require("path");
//nasłuch na określonym porcie

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})