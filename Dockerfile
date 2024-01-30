FROM node:alpine
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8000
CMD [ "npm", "start"]