#!/usr/bin/env node

const path = require("path");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpegDir = path.dirname(ffmpegPath);

const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

console.log(`${ffmpegDir}`);
