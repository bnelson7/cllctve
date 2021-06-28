const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");

const users = require("./routes/api/users");
const comments = require("./routes/api/comments");
const projects = require("./routes/api/projects");

const User = require("./models/User")

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    // const user = new User({
    //     firstName: "zeus"
    // })
    // user.save()
    res.send("Hello World")
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/projects", projects);

app.listen(5000, () => console.log(`Server is running on port 5000`));
