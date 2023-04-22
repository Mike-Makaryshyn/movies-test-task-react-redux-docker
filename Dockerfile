FROM node:latest

WORKDIR /app
COPY . /app
CMD ["cd", "app"]

RUN npm install

CMD ["npm", "start"]