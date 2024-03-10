import React, { useState } from "react";
import UsuarioList from "./views/usuario/List"
import UsuarioForm from "./views/usuario/Form"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";
import UsuarioService from "./services/usuario";
import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const UsrSrv = new UsuarioService(axios, BACKEND_URL);

function App() {
  const [listagem, setListagem] = useState([]);
  const [usuarioEmEdicao, setUsuarioEmEdicao] = useState(false);
  
  const carregarUsuarios = async () => {
    const lista = await UsrSrv.get();
    setListagem(lista);
  }
  carregarUsuarios();

  const novoUsuario = () => {
    setUsuarioEmEdicao({
      novo: true,
      nome: "",
      idade: "",
      estado: "",
      cidade: ""
    }) 
  }
  
  return (
    <div className="App">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Cadastro de Usuários
          </Typography>
          <Paper>
            <Box p={5} mt={2}>
              <UsuarioList listagem={listagem} setUsuarioEmEdicao={setUsuarioEmEdicao} carregarUsuarios={carregarUsuarios} UsrSrv={UsrSrv} />
            </Box>
          </Paper>
        </CardContent>
        <CardActions>
          {!usuarioEmEdicao && (<Button size="small" variant="contained" color="secondary" onClick={novoUsuario}>Novo</Button>)}
        </CardActions>

        {usuarioEmEdicao && (
          <CardContent>
            <Paper elevation={24}>
              <Box p={5}>
                <Typography variant="h6" component="div">
                  {usuarioEmEdicao.novo ? "Novo" : "Alterando"} usuário
                </Typography>
                <UsuarioForm usuarioEmEdicao={usuarioEmEdicao} carregarUsuarios={carregarUsuarios} setUsuarioEmEdicao={setUsuarioEmEdicao} UsrSrv={UsrSrv}  />
              </Box>
            </Paper>
          </CardContent>
        )}
      </Card>
    </div>
  );
}

export default App;
