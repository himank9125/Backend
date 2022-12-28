const http = require("http");
// console.log(http);
const server = http.createServer((req, resp) => {
  if (req.url == "/") {
    resp.end("This is home page");
  } else if (req.url == "/about") {
    resp.end("This is About Us page");
  } else {
    resp.end("404 Page not Found");
  }
});
server.listen(3000);
