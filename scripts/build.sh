#!/bin/sh
npm i

npm install --save @ffmpeg-installer/ffmpeg

node ./scripts/test.js

export PATH=`./scripts/ffmpeg-path.js`:$PATH
echo "PATH: $PATH"

echo "whereis"
whereis ffmpeg

ffmpeg

npm run build