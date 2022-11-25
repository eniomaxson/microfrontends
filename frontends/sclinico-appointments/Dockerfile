FROM node:14.15.0-alpine
WORKDIR /src/sclinico-appointments
COPY package*.json ./
RUN npm install
EXPOSE 4202
CMD npm run serve:single-spa