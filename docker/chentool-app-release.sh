#!/bin/bash

echo '==============开始部署前端=============='

cd /usr/local/src/chentool-app || exit 1

#git checkout master
#git checkout .
echo '==============开始拉取最新代码==========='
sudo git pull --rebase || exit 1
echo '==============拉取最新代码成功=========='

echo '==============yarn=========='
echo '==============yarn添加依赖=========='
yarn install
echo '==============yarn打包=========='
yarn run build
echo '==============yarn打包成功=========='

sleep 1

echo '==============开始打包镜像================'
docker compose -f ./docker/docker-compose.yml build --no-cache
echo '==============镜像打包成功================'

echo '==============开始部署容器================'
docker compose -f ./docker/docker-compose.yml up -d
echo '==============容器部署成功================'

echo '==============前端发布成功!================'
