FROM node:18 as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:alpine as production-stage

COPY --from=build-stage /app/dist/angular /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
