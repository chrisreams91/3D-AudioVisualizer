#!/usr/bin/env node

// const path = require("path");

// const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
// const ffmpeg = require("fluent-ffmpeg");
// ffmpeg.setFfmpegPath(ffmpegPath);

// const ffmpegDir = path.dirname(ffmpegPath);
// console.log(`${ffmpegDir}`);

var pathToFfmpeg = require("ffmpeg-static");
console.log(pathToFfmpeg);
