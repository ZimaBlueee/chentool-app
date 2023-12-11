FROM node:18-buster-slim as build-stage

WORKDIR /app

COPY . .

RUN npm install --registry=https://registry.npmmirror.com

RUN npm run build

FROM nginx:latest

COPY --from=build-stage /app/dist /usr/share/nginx/html/chentool

COPY ./docker/chentool.conf /etc/nginx/conf.d/

EXPOSE 8083

CMD ["nginx", "-g", "daemon off;"]
