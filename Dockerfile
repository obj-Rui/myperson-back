FROM node:18.0-alpine3.20 as build-stage

WORKDIR /app

COPY package.json .

RUN npm config set registry  https://mirrors.huaweicloud.com/repository/npm/

RUN echo "pnpm install"
RUN npm install pnpm

RUN echo "pnpm install"
RUN pnpm install

# build stage

COPY . .

RUN npm run build

# production stage
FROM node:18.0-alpine3.20 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm config set registry  https://mirrors.huaweicloud.com/repository/npm/

RUN npm install --production

EXPOSE 3005

CMD ["node", "/app/main.js"]
