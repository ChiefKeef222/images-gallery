FROM node:20-alpine

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install --silent --prefer-offline --no-audit

COPY . .

CMD ["npm", "start"]
