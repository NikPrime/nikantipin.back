FROM node:14-alpine3.10

WORKDIR /app

EXPOSE 3000

COPY package*.json ./

RUN npm install
RUN npm install @nestjs/cli

COPY . .

RUN npm run migrations:run

CMD ["npm", "run", "start"]