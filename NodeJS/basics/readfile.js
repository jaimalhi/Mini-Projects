let path = require("path");
let fs = require("fs");

let fileName = process.argv[2] || "No file provided";
if (fileName === "No file provided") {
   console.log("No file provided");
   process.exit();
}

let filePath = path.join(__dirname, fileName);
console.log(filePath);

let contents = fs.readFileSync(filePath, "utf8");
console.log(contents);

// example usage: node readfile.js sayhi.sh
