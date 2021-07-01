const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

const users = require("./routes/api/users");
const comments = require("./routes/api/comments");
const projects = require("./routes/api/projects");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/projects", projects);

app.listen(5000, () => console.log(`Server is running on port 5000`));
