FROM node:14.15.0-alpine
WORKDIR /src/navbar
COPY package*.json ./
RUN npm install
EXPOSE 4203
CMD npm run serve:single-spa
