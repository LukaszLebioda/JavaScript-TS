// run => node archive/server/server.js

import express from "express";
// const path = require("path");

const app = express();
const PORT = 3000;

// just some header
// app.get("/", (req, res) => {
// 	res.send("Witaj na serwerze localhost!");
// });

// displaying html with path dependency
// app.get("/", function (req, res) {
// 	res.sendFile(path.join(__dirname, "/index.html"));
// });

// displaying html
app.get("/", function (req, res) {
	res.sendFile("/Users/llebioda/Desktop/Private/JavaScript-TS/index.html");
});
app.listen(PORT, () => {
	console.log(`Serwer uruchomiony na http://localhost:${PORT}`);
});
