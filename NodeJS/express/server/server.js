// npm modules
const express = require("express");
const serveIndex = require("serve-index");
const upload = require("express-fileupload");
const cors = require("cors");
let app = express();
// node modules
let path = require("path");
let fs = require("fs");
let http = require("http");

const port = 8080;

// allow cors
app.use(cors());

// parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use("/", express.static(path.join(__dirname, "./static"), { index: ["home.html"] }));
app.use("/", (req, res, next) => {
   console.log("req.url", req.url);
   next();
});

// templates
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.get("/homepage", (req, res) => {
   return res.render("homepage", { name: "John" });
});
app.get("/db", (req, res) => {
   var data = {
      results: [
         { name: "John", age: 43 },
         { name: "Jane", age: 33 },
         { name: "Joe", age: 23 },
      ],
   };
   return res.render("db", data);
});

// https
app.get("/https", (req, res) => {
   http.get("http://worldtimeapi.org/api/timezone/Europe", (response) => {
      let data = "";
      response.on("data", (chunk) => {
         data += chunk;
      });
      response.on("end", () => {
         return res.send(JSON.parse(data));
      });
   });
});

// start server
app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});
