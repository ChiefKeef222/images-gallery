FROM node:23-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm ci --silent --prefer-offline --no-audit


COPY . ./

CMD ["npm", "start"]