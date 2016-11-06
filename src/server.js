const os = require("os");
const exec = require('child_process').exec;

const express = require("express");
const app = express();
const http = require("http");
const port = process.env.PORT || 8080;

app.use(express.static("docs"));
app.listen(port);

app.get('/', function (req, res) {
	res.send('Emoji API.');
});

if(os.platform() == "darwin"){
	exec(`open http://localhost:${port}`);
}

console.log("Server running at:");
console.log(`Address: http://localhost:${port}`);