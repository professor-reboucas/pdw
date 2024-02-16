FROM index.docker.io/library/node:20.11-buster-slim
WORKDIR "/frontend"
COPY package.json /frontend/package.json
RUN npm i
COPY . /frontend
EXPOSE 3000
CMD npm start