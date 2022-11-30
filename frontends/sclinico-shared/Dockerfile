FROM node:14.15.0-alpine
WORKDIR /src/sclinico-shared
COPY package*.json ./
RUN npm install
EXPOSE 4200
CMD npm run start