const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Axios request to get data from API

let templatevar = {};
axios
	.get("http://jsonplaceholder.typicode.com/users")
	.then((result) => {
		templatevar["result"] = result.data;
		console.log(templatevar);
	})
	.catch((err) => console.log(err));

app.get("/", (req, res) => {
	res.render("welcome", templatevar);
});

// Server listening in PORT 8080
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
