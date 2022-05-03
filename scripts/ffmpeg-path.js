#!/usr/bin/env node

const path = require("path");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpegDir = path.dirname(ffmpegPath);

console.log("test log");
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegDir);

console.log(`${ffmpegDir}`);
