const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const stream = require("youtube-audio-stream");

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

const app = express();
app.use(express.json());

const router = express.Router();
router.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

router.post("/audio", async (req, res) => {
  try {
    //@ts-ignore
    for await (const chunk of stream(req.body.url)) {
      res.write(chunk);
    }
    res.end();
  } catch (err) {
    console.log(err);
    res.writeHead(500);
    res.end(err);
  }
});

router.get("/test", async (req, res) => {
  res.send("test");
});

app.use("/.netlify/functions/server", router); // path must route to lambda
app.use(express.static(path.join(__dirname, "..", "build")));

// app.get("/", (_, res) => {
//   res.sendFile(path.join(__dirname, "..", "build", "index.html"));
// });

// app.post("/audio", async (req, res) => {
//   try {
//     //@ts-ignore
//     for await (const chunk of stream(req.body.url)) {
//       res.write(chunk);
//     }
//     res.end();
//   } catch (err) {
//     console.error(err);
//     if (!res.headersSent) {
//       res.writeHead(500);
//       res.end("internal system error");
//     }
//   }
// });

module.exports = app;
module.exports.handler = serverless(app);
