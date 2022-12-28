//----------------------------OS------------------------
const os = require("os");
// console.log(os.tmpdir());
// console.log(os.type());
// console.log(os.release());
// console.log(os.hostname());
// console.log(os.userInfo());

//-------------FS------------------
const fs = require("fs");
// fs.writeFileSync("Test.txt", "Welcome to allahabad");
// fs.appendFileSync("Test.txt", " Ghonch");
// const data = fs.readFileSync("Test.txt", "utf-8");
// console.log(data);
//-------------------http----------------------
const http = require("http");
// const server = http.createServer(function (req, resp) {
//   resp.write("Line 1");
//   resp.write("Line 2");
//   resp.write("Line 3");
//   resp.write("Line 4");
//   resp.end("This is server");
// });
// server.listen(4000);

// const server = http.createServer((req, resp) => {
//   switch (req.url) {
//     case "/": {
//       resp.write("This is Home Page");
//       break;
//     }

//     case "/about": {
//       resp.write("This about Page");
//       break;
//     }

//     case "/contact": {
//       resp.write("This is Contact us page");
//       break;
//     }

//     default: {
//       resp.write("404 Page not found");
//     }
//   }
//   resp.end();
// });
// server.listen(4444);

//-------------------------Path-------------------------------
const path = require("path");
// const urls = "https://www.w3schools.com/nodejs/nodejs_intro.asp";
// const ppt = path.dirname(urls);
// console.log(ppt);
// console.log(
//   path.join("https://www.w3schools.com/nodejs/nodejs_intro.asp", "Second_Link")
// );
// console.log(path.extname(urls));

///-------Read-----Stream--------------------
const files = require("fs");
// let str = "";

// let streamReader = files.createReadStream("Test2.txt");
// streamReader.on("data", (chunk) => {
//   str += chunk;
// });
// streamReader.on("end", () => {
//   console.log(str);
// });
// streamReader.on("error", (err) => {
//   console.log(err.stack);
// });

//----------------Create-----------Stream------------
const fsFiles = require("fs");
// const data = "Welcome to Stream Reader Chapter";
// const streamReader = fsFiles.createWriteStream("Output.txt");
// streamReader.write(data, "utf-8");
// streamReader.end();
// streamReader.on("finish", () => {
//   console.log(data, "has been saved");
// });

//-----------------Stream --------------Pipes-----------------

const filesofFs = require("fs");
// const outputSream = filesofFs.createReadStream("Output.txt");
// const inputStream = filesofFs.createWriteStream("Output2.txt");
// outputSream.pipe(inputStream);

//---------------events----------------------------------
//------------------------------Method 1--------------------------
const EventEmitter = require("events");
// const events = new EventEmitter();
// function fun1(msg) {
//   console.log("This is function1 " + msg);
// }
// events.addListener("myEvent", fun1);
// events.emit("myEvent", "Himanshu");

////////-------------------Method2----------------------------

const eventy = require("events");
// const events = new eventy();
// events.addListener("myEvent", (msg) => {
//   console.log("welcome to second event " + msg);
// });
// events.emit("myEvent", "Shubham");

//--------------------------------Method 3----------------------

// const eventy = require("events");
// const events = new eventy();
// events.on("myEvent", (msg) => {
//   console.log("welcome to event 3 " + msg);
// });
// events.emit("myEvent", "Atharv");
// events.emit("myEvent", "Vikash");
