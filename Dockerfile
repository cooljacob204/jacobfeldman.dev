FROM node:12

RUN npm install http-server -g

COPY ./build /app/build

CMD ["http-server", "./app/build"]