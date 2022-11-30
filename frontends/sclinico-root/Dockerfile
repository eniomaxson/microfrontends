FROM node:14.15.0-alpine
WORKDIR /src/sclinico-root
COPY package*.json ./
RUN npm install
EXPOSE 9000
CMD npm run start 