FROM node:14
ADD main.js ./
ADD package.json ./
RUN npm install
# set maintainer
LABEL maintainer "ashish.denny.p@oracle.com"

EXPOSE 80
CMD [ "npm", "start" ]
