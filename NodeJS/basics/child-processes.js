let cp = require("child_process");
let os = require("os");

// Execute a shell command through NodeJS
if (os.platform() == "win32") {
   fn = "bobby";
   age = 42;
   cp.exec(`sh sayhi.sh ${fn} ${age}`, (err, stdout, stderr) => {
      if (err) {
         console.log(err);
      }
      console.log(stdout);
   });
} else {
   console.log("This only works on Windows OS");
}
