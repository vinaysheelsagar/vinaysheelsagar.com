FROM node:18 AS builder

WORKDIR /app

COPY ./app/package*.json .

RUN npm install

COPY . .

EXPOSE 5173

RUN npm run build

FROM node:18-slim AS production

RUN npm install -g serve

WORKDIR /app

COPY --from=builder /app/dist ./dist

EXPOSE 5173

CMD [ "serve", "-s", "dist", "-l", "5173" ]
