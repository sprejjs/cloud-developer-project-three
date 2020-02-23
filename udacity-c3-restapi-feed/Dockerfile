FROM node:12
WORKDIR /user/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 8080
CMD ["npm", "run", "prod"]
