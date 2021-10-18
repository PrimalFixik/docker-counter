FROM node:lts-alpine3.14
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 8080
CMD ["node", "index.js"]
