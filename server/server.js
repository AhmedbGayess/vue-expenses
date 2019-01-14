const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const users = require("./routes/users");
const expenses = require("./routes/expenses");

const app = express();

// cors middleware
app.use(cors());

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DB config
const { mongoURI } = require("./config/keys");

// Connect to MongoDB
mongoose
    .connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Passport middleware
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/expenses", expenses)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));