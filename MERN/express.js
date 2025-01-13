import express from "express"; // package.json -> type: "module"
// const path = require("path"); // package.json -> type: "commonjs"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Server is ready");
});

app.listen(PORT, () => {
	connectDB();
	console.log(`Server started at http://localhost:${PORT}`);
});

// // displaying html
// app.get("/", function (req, res) {
// 	res.sendFile("/Users/llebioda/Desktop/Private/JavaScript-TS/index.html");
// });
// app.listen(PORT, () => {
// 	console.log(`Server started at http://localhost:${PORT}`);
// });

// displaying information at localhost:3000
// app.get("/", (req, res) => {
// 	res.send("Server is ready...");
// });

// displaying html with path dependency
// app.get("/", function (req, res) {
// 	res.sendFile(path.join(__dirname, "/index.html"));
// });
