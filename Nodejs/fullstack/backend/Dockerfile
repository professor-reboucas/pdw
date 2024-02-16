FROM index.docker.io/library/node:20.11-buster-slim
WORKDIR "/backend"
COPY package.json /backend/package.json
RUN npm i
COPY . /backend
EXPOSE 5000
CMD npm start