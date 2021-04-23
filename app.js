const express = require("express");
const app = express();
const accountRoutes = require("./routes/accountRoutes");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");


// Routes
app.use("/accounts", accountRoutes);


app.listen(3000);

