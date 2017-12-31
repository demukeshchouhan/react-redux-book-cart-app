"use strict";
const express =  require("express");
const http =  require("http");
const bodyParser =  require( "body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");

// app
app.use(express.static("public"));
app.use(morgan("combined"));
app.use(bodyParser.json({ type : "*/*" }));
router(app);

// server setup
const port = process.env.PORT || 6060;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);