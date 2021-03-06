let express = require("express");
let app = express();
let bodyparser = require("body-parser");
let mongoose = require("mongoose");
let morgan = require("morgan");
let cors = require("cors");
let ejwt = require("express-jwt");

mongoose.connect("mongodb://localhost/fitnessapi");
mongoose.Promise = global.Promise;

let userSchema = require("./database/userSchema");
let programSchema = require("./database/programSchema");
let logEntrySchema = require("./database/logEntrySchema");

let userModel = mongoose.model("User", userSchema);
let programModel = mongoose.model("Program", programSchema);
let logEntryModel = mongoose.model("LogEntry", logEntrySchema);

app.use(bodyparser.json());
app.use(morgan("dev"));
app.use(cors());

let userRoutes = require("./routes/userRoutes")(userModel);
app.use("/api", userRoutes);

let programRoutes = require("./routes/programRoutes")(programModel);
app.use("/api", ejwt({secret: process.env.JWT_KEY}), programRoutes);

let logEntryRoutes = require("./routes/logEntryRoutes")(logEntryModel);
app.use("/api", ejwt({secret: process.env.JWT_KEY}), logEntryRoutes);

app.get("/", (req, res) => res.send("Please go to /api to use the API :)"));
app.get("/api", (req, res) => res.send("API version: 1.0"));

app.use(function (err, req, res, next) {
    console.log("Error: " + err.name);
    if (err.name === "UnauthorizedError") {
        res.status(401).json({msg: "invalid token..."});
    } else {
        next();
    }
});

app.listen(process.env.PORT, function () {
    console.log("Fitness API started.. Listening on port " + process.env.PORT);
});
