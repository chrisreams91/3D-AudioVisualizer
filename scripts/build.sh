#!/bin/sh
npm i

sudo apt update
sudo apt install ffmpeg
which ffmpeg 
# npm install --save @ffmpeg-installer/ffmpeg

# node `./scripts/ffmpeg-path.js`

# export PATH=`./scripts/ffmpeg-path.js`:$PATH
# echo "PATH: $PATH"
# ffmpeg 
# which ffmpeg

# FFMPEG_PATH=$(which ffmpeg)
# echo $FFMPEG_PATH

npm run build