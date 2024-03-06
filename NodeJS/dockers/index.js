const express = require("express");
const app = express();
// const cors = require("cors");

const port = 8080;

const { Pool } = require("pg");
var pool = new Pool({
   user: "postgres",
   host: "db",
   password: "root",
});

// body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

app.get("/", (req, res) => {
   res.send("Hello World");
});

app.post("/users", async (req, res) => {
   const { name, age } = req.body;
   const response = await pool.query("INSERT INTO users (name, age) VALUES ($1, $2)", [name, age]);
   res.json("Success");
});

app.get("/users", async (req, res) => {
   const response = await pool.query("SELECT * FROM users");
   res.json(response.rows);
});

app.listen(port, "0.0.0.0", () => {
   console.log(`App listening at http://localhost:${port} & http://0.0.0.0:${port}`);
});
