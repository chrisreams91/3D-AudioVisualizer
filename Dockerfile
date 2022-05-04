FROM --platform=linux/amd64 node:14.17.0-alpine

RUN apk update
RUN apk add ffmpeg

WORKDIR "/app"

COPY . /app

RUN npm install

EXPOSE 3000

RUN npm run build:app

CMD ["npx", "nodemon", "server.ts"]