FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV Port = 3000
EXPOSE $PORT
CMD ["npm", "start"]