const { Client } = require("pg");


const client = new Client({
  user: "employee_user",
  host: "employee-db",
  database: "employee_db",
  password: "employee_password",
  port: 5432,
});

client.connect();

module.exports = client;