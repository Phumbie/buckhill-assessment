FROM node:lts-alpine as build-stage
ARG GIT_BRANCH_NAME
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --mode $GIT_BRANCH_NAME
RUN mkdir -p ./server
RUN npm install --prefix ./server ./server

# production stage
FROM node:lts-alpine as production-stage
COPY --from=build-stage /app/dist /app/dist
COPY --from=build-stage /app/server /app/server
EXPOSE 8080
CMD [ "node",  "/app/server/app.js" ]
