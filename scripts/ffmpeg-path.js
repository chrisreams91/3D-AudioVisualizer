#!/usr/bin/env node

const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;

const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

console.log(`ffmpegPath : ${ffmpegPath}`);

// const path = require("path");
// const ffmpegDir = path.dirname(ffmpegPath);
// console.log(`${ffmpegDir}`);
