FROM node:12

RUN npm install http-server -g

COPY ./ ./

RUN npm run-script build

CMD ["http-server", "./build"]