FROM node:20-alpine
RUN corepack enable
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 8080
CMD ["yarn", "start"]
