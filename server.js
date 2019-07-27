const express = require("express");
const expresshb = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();
const path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");


app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.engine("handlebars", expresshb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const apiRoutes = require("./controllers/apiRoutes");
app.use(apiRoutes);
app.listen(PORT, function () {
    console.log(`server listening at localhost ${PORT}`);
});
