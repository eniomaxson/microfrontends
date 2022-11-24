FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 4201
CMD ["npm", "run", "serve:single-spa"]