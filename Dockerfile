FROM node:carbon
MAINTAINER ina-uzu ina.uzu.song@gamil.com

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app

RUN npm install

CMD node ./bin/www
