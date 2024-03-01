// Utilize NodeJS alongside other process.* methods

// Print to the console
process.stdout.write("Hello, World!\n");

// Listen for data from the user and echo it back
process.stdin.on("data", (data) => {
   process.stdout.write(data);
   // process.exit(); // Exit the process
});

// argv is an array containing the command line arguments
var port = process.argv[2] || 8080;
