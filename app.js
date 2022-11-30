const express = require("express");

const tailwindConfig = require("./tailwind.config");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));
app.use(express.static("public"));

app.listen(port, () => console.log(`Server is running on port ${port}`));
