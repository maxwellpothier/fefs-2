const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/teapot", (req, res) => {
	res.set("X-full-stack", "4lyfe");
	res.status(418);
	res.send("Can't go here");
});

app.listen(port, () => console.log(`Example app running now on port ${port}!`));
