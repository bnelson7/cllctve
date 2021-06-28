const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => res.send("Hello World"));

app.listen(5000, () => console.log(`Server is running on port 5000`));

const db = require("./config/keys").mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));
