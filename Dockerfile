FROM node:12-alpine

WORKDIR /app/base-server

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm", "start" ]