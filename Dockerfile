FROM node:alpine

WORKDIR  /home/sunbeam/DAC/DevOps/mean-using-jenkins/server

COPY . .

EXPOSE 8000

CMD node server.js
