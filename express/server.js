const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const stream = require("youtube-audio-stream");

const app = express();
app.use(express.json());

const router = express.Router();
router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hello from Express.js!</h1>");
  res.end();
});
router.get("/another", (req, res) => res.json({ route: req.originalUrl }));
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use("/.netlify/functions/server", router); // path must route to lambda
// app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.post("/audio", async (req, res) => {
  try {
    //@ts-ignore
    for await (const chunk of stream(req.body.url)) {
      res.write(chunk);
    }
    res.end();
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.writeHead(500);
      res.end("internal system error");
    }
  }
});

module.exports = app;
module.exports.handler = serverless(app);
