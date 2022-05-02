export const createAudio = async (url: string) => {
  const url1 = "https://youtu.be/hBi9wavp2w4";

  const x = ".netlify/functions/server";
  // const isLocal = process.env.NODE_ENV === "production";

  console.log(process.env.REACT_APP_ENVIRONMENT);
  const res = await fetch(`${x}/audio`, {
    method: "POST",
    body: JSON.stringify({ url: url1 }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const buffer = await res.arrayBuffer();
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
