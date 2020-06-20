FROM node:13.12.0-alpine3.10

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . ./

CMD ["npm", "start"]
