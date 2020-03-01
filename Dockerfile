FROM node:12

RUN npm install http-server -g

COPY ./ /app

RUN cd app && npm run-script build

CMD ["http-server", "./build"]