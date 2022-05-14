import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
const config = require("../config.json");

export const createAudio = async (url: string) => {
  const response = await fetch(`/audio`, {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // if (!response.ok) {
  //   throw new Error("Bad URL");
  // }

  const buffer = await response.arrayBuffer();
  const context = new window.AudioContext();
  const source = context.createBufferSource();
  source.buffer = await new Promise((res) =>
    context.decodeAudioData(buffer, res)
  );
  source.loop = true;

  source.start(0);
  const gain = context.createGain();
  const analyser = context.createAnalyser();

  // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize
  analyser.fftSize = 128;
  source.connect(analyser);
  analyser.connect(gain);
  const data = new Uint8Array(analyser.frequencyBinCount);
  return {
    context,
    source,
    gain,
    data,
    update: () => {
      analyser.getByteFrequencyData(data);
    },
  };
};

export const fetchDefaultSong = async () => {
  const client = new S3Client(config.client);
  const res = await client.send(new GetObjectCommand(config.params));

  //@ts-ignore
  const stringified: { url: string } = await new Response(res.Body, {}).json();
  return stringified.url;
};
