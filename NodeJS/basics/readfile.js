let path = require("path");
let fs = require("fs");

let fileName = process.argv[2] || "No file provided";
if (fileName === "No file provided") {
   console.log("No file provided");
   process.exit();
}

let filePath = path.join(__dirname, fileName);
// console.log(filePath);

// read from file: example usage: node readfile.js sayhi.sh
let contents = fs.readFileSync(filePath, "utf8");
console.log(contents);

// write to file: example usage: node readfile.js sayhi.sh "Hello, world!"
let newContents = process.argv[3] || "No content provided";
if (newContents !== "No content provided") {
   fs.writeFileSync(filePath, newContents);
   console.log("File updated");
   // read from file
   contents = fs.readFileSync(filePath, "utf8");
   console.log(contents);
}
