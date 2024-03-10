import React from "react";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function UsuarioList(props) {
  const { listagem, setUsuarioEmEdicao, carregarUsuarios, UsrSrv } = props;
  
  const removeUsuario = async (item) => {
    await UsrSrv.remove(item);
    await carregarUsuarios();
  }
  
  return (
      <Card>
        <CardContent>
          {
            (listagem.length === 0) ? (
              <p>Nenhum usuário encontrado</p>
            )
            :
            <Grid container p={3}>
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
              (listagem.map((val, key) => (
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
                  <Grid item xs={3} spacing={50}>
                      <Button size="small" variant="contained" onClick={()=>setUsuarioEmEdicao({...val, atual:val})} color="warning">Alterar</Button>
                      <Button size="small" variant="contained" onClick={()=>removeUsuario(val)} color="error">Excluir</Button>
                  </Grid>
                </React.Fragment>
              )))
            }
            </Grid>
          }
        </CardContent>
      </Card>
  )
}

export default UsuarioList;
