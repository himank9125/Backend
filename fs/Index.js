const fs = require("fs");
fs.writeFileSync("testing.txt", "welcome to test directory");
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);
// fs.appendFileSync("test.txt", " This is new data");
// fs.unlinkSync("test2.txt");
console.log(fs.readFileSync("test.txt").toString());
fs.writeFile("test2.txt", "this is text content", () => {
  console.log("Done");
});
