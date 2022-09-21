FROM node:alpine AS build

WORKDIR /app

COPY ./counter-app/package.json /app/

RUN npm install

COPY ./counter-app /app/

RUN npm run build

FROM nginx:alpine


COPY --from=build /app/build/ /usr/share/nginx/html

COPY ./default.conf /etc/nginx/conf.d/default.conf

RUN ls -la /usr/share/nginx/html

WORKDIR /usr/share/nginx/html