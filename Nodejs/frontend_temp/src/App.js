import "./App.css";
import UsuarioService from "./services/usuario"
import Grid from '@mui/material/Grid';
import React, { useState } from "react";

const Usuario = new UsuarioService;

function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(null);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [usuarioList, setUsuarioList] = useState([]);
  const [mostraForm, setMostraForm] = useState(false);
  const [flagNovoCadastro, setFlagNovoCadastro] = useState(true);
  const [usuarioEmEdicao, setUsuarioEmEdicao] = useState({});

  const salvar = () => {
    const novo = {
      nome: nome,
      idade: idade,
      cidade: cidade,
      estado: estado
    };
    if (flagNovoCadastro){
      Usuario.add(novo);
    } else {
      Usuario.update(usuarioEmEdicao, novo);
      setUsuarioEmEdicao({})
    }
    getUsuarios();
    limpaForm();
  }

  const limpaForm = () => {
    setNome("")
    setIdade("")
    setCidade("")
    setEstado("")
  }

  const carregaForm = (dados) =>{
    setNome(dados.nome);
    setIdade(dados.idade);
    setCidade(dados.cidade);
    setEstado(dados.estado);
  }

  const getUsuarios = () => {
    const lista = Usuario.get();
    setUsuarioList(lista);
  }

  const abreForm = () => {
    limpaForm();
    setFlagNovoCadastro(true);
    setMostraForm(true);
  }

  const updateUsuario = (item) => {
    abreForm();
    carregaForm(item);
    setFlagNovoCadastro(false);
    setUsuarioEmEdicao(item);
  }

  const removeUsuario = (item) => {
    Usuario.remove(item);
    getUsuarios();
  }
  
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <div className="listagem">
            <button onClick={getUsuarios}>Carregar</button>
            {!mostraForm && (<button onClick={abreForm}>Novo</button>)}
            {
              (usuarioList.length === 0) ? (
                <p>Nenhum usuário encontrado</p>
              )
              :
              <Grid container spacing={2} p={3}>
                <Grid item xs={3}>
                  <b>Nome</b>
                </Grid>
                <Grid item xs={1}>
                  <b>Idade</b>
                </Grid>
                <Grid item xs={2}>
                  <b>Estado</b>
                </Grid>
                <Grid item xs={3}>
                  <b>Cidade</b>
                </Grid>
                <Grid item xs={3}>
                  <b>Ações</b>
                </Grid>
              {
                (usuarioList.map((val, key) => (
                  <React.Fragment key={key}>
                    <Grid item xs={3}>
                      <p>{val.nome}</p>
                    </Grid>
                    <Grid item xs={1}>
                      <p>{val.idade}</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>{val.estado}</p>
                    </Grid>
                    <Grid item xs={3}>
                      <p>{val.cidade}</p>
                    </Grid>
                    <Grid item xs={3}>
                      <button onClick={()=>updateUsuario(val)}>Alterar</button>
                      <button onClick={()=>removeUsuario(val)}>Excluir</button>
                      
                    </Grid>
                  </React.Fragment>
                )))
              }
              </Grid>
            }
          </div>
        </Grid>
        {
          mostraForm && (
          <Grid item xs={12} md={4} >
            <Grid item xs={12}>
              <h4>Novo usuário</h4>
              <label>Nome:</label>
              <input
                type="text"
                onChange={(event) => {
                  setNome(event.target.value);
                }}
                value={nome}
              />
            </Grid>  
            <Grid item xs={12}>
              <label>Idade:</label>
              <input
                type="number"
                onChange={(event) => {
                  setIdade(event.target.value);
                }}
                value={idade}
              />
            </Grid>  
            <Grid item xs={12}>
              <label>Estado:</label>
              <input
                type="text"
                onChange={(event) => {
                  setEstado(event.target.value);
                }}
                value={estado}
              />
            </Grid>  
            <Grid item xs={12}>  
              <label>Cidade:</label>
              <input
                type="text"
                onChange={(event) => {
                  setCidade(event.target.value);
                }}
                value={cidade}
              />
            </Grid>
            <button onClick={salvar}>Salvar</button>
            <button onClick={()=>setMostraForm(!mostraForm)}>Cancelar</button>

          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
