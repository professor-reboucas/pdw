import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./src/routes/usuarios.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/usuarios", usersRoutes);
app.get("/", (req, res) => res.send("Bem vindo a API de Usuários"));
app.all("*", (req, res) =>res.send("Essa página não existe."));

app.listen(PORT, () =>console.log(`Servidor executando em: http://localhost:${PORT}`));
