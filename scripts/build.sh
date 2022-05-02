#!/bin/sh
npm i

npm install --save @ffmpeg-installer/ffmpeg
export PATH=`./ffmpeg-path.js`:$PATH
echo "PATH: $PATH"

npm run build