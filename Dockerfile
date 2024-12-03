FROM node:18

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm i -g nodemon

RUN npm install

EXPOSE 4200

CMD ["sh", "-c", "npm run build && npm start"]
#CMD ["ng", "serve", "--host", "0.0.0.0"]