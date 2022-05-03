#!/bin/sh


#!/bin/sh
npm i

npm install --save @ffmpeg-installer/ffmpeg
npm install ffmpeg-static

# export PATH=`./scripts/ffmpeg-path.js`:$PATH
# echo "PATH: $PATH"

FFMPEG_PATH=$(which ffmpeg)
echo $FFMPEG_PATH

ffmpeg

npm run build