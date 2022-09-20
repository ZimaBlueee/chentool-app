FROM node:18-buster-slim

RUN npm install -g http-server

WORKDIR /src

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000
CMD [ "http-server", "dist" ]
