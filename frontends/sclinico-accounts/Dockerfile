FROM node:14.15.0-alpine
WORKDIR /src/sclinico-accounts
COPY package*.json ./
RUN npm install
EXPOSE 4201
CMD npm run serve:single-spa