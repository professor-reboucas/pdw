# API exemplo de CRUD em Node.js com Express

### Requisitos
- Node 20

### Como executar
- `npm install`
- `npm start`

### Como testar

Usando um cliente REST é possível fazer as seguintes requisições:

#### Listar usuários
- GET http://localhost:5000/usuarios

#### Incluir usuários
- POST http://localhost:5000/usuarios
- Json de exemplo que deve ir no body:
    {
        "nome":"fulano",
        "idade":"33",
        "estado": "Distrito Federal",
        "cidade": "Brasília"
    }

#### Obter apenas 1 usuário
- GET http://localhost:5000/usuarios/{id}
onde id é o identificador o usuário

#### Alterar um usuário
- PATCH http://localhost:5000/usuarios/{id}
onde id é o identificador o usuário
- Json de exemplo que deve ir no body:
    {
        "nome":"ciclano",
        "idade":"32",
        "estado": "Distrito Federal",
        "cidade": "Brasília"
    }

#### Excluir um usuário
- DELETE http://localhost:5000/usuarios/{id}
onde id é o identificador o usuário