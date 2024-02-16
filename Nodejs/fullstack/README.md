# FullStack para gerenciamento de usuários

Neste projeto é demonstrada uma aplicação para gerenciamento de usuários contendo o frontend, o backend, o banco de dados e o gerenciamento dos serviços em conatiners. Os dados são armazenados em volumes persistentes e permanecem mesmo após a interrupção da aplicação.

### Requisitos
- Docker 20.10
- Docker Compose

### Como executar
- crie um arquivo .env no diretório "fullstack" conforme modelo a seguir:
    - POSTGRES_DB=pdw
    - POSTGRES_USER=##### USUARIO #####
    - POSTGRES_PASSWORD=##### SENHA #####
    - DATABASE_PORT=5432
    - DATABASE_HOST=database

- `docker compose up -d --build`

A primeira execução demora um pouco.

### Como testar

Abra um navegador e acesse: http://localhost:3000.
