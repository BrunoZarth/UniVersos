const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

const employeeRoutes = require("./routes/employee");
app.use("/employee", employeeRoutes);

const loginRoutes = require("./routes/login");
app.use("/login", loginRoutes);

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});