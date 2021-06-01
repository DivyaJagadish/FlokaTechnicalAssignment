const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
