// sorry but taken from https://github.com/JamesKyburz/youtube-audio-stream
// due to outdated dependencies and didnt feel like bothering with fork

const ytdl = require("ytdl-core");
const FFmpeg = require("fluent-ffmpeg");
const { PassThrough } = require("stream");
const fs = require("fs");

export function streamify(uri, opt) {
  opt = {
    ...opt,
    videoFormat: "mp4",
    quality: "lowest",
    audioFormat: "mp3",
    filter(format) {
      return format.container === opt.videoFormat && format.audioBitrate;
    },
  };

  const video = ytdl(uri, opt);
  const { file, audioFormat } = opt;
  const stream = file ? fs.createWriteStream(file) : new PassThrough();
  const ffmpeg = new FFmpeg(video);

  process.nextTick(() => {
    const output = ffmpeg.format(audioFormat).pipe(stream);

    ffmpeg.once("error", (error) => stream.emit("error", error));
    output.once("error", (error) => {
      video.end();
      stream.emit("error", error);
    });
  });

  stream.video = video;
  stream.ffmpeg = ffmpeg;

  return stream;
}
