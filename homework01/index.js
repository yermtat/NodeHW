const http = require("http");
const { readFile, writeFile } = require("./fileManager");

http
  .createServer(function (req, res) {
    if (req.url === "/file" && req.method === "GET") {
      let data = readFile(`${__dirname}/data.txt`).catch(() => {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      });
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    } else if (req.url === "/file" && req.method === "POST") {
      let body;
      req.on("data", function (content) {
        body += content;
      });

      writeFile(`${__dirname}/data.txt`, body).catch(() => {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("File not found");
      });

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("File was updated  succesfully ");
      S;
    } else if (req.url === "/time" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(new Date().toLocaleTimeString());
    } else if (req.url === "/date" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(new Date().toLocaleDateString());
    } else if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Welcome to my first Node.js server!");
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 not found");
    }
  })
  .listen(3000);
