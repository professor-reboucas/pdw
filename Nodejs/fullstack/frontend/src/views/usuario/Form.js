import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function UsuarioForm(props) {
    const { carregarUsuarios, usuarioEmEdicao, UsrSrv, setUsuarioEmEdicao } = props;
    const salvar = async () => {
        if (usuarioEmEdicao.novo){
            delete usuarioEmEdicao.novo;
            await UsrSrv.add(usuarioEmEdicao);
        } else {
            await UsrSrv.update(usuarioEmEdicao.atual, usuarioEmEdicao);
        }
        await carregarUsuarios();
        setUsuarioEmEdicao(false);
    }

    return (
        usuarioEmEdicao && (
            <Grid>
                    <TextField 
                        required={true}
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Nome" 
                        variant="outlined" 
                        onChange={(event) => {
                            setUsuarioEmEdicao({...usuarioEmEdicao,nome:event.target.value});
                        }}
                        value={usuarioEmEdicao.nome}
                    />
                    <TextField 
                        required={true}
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Idade" 
                        variant="outlined" 
                        onChange={(event) => {
                            setUsuarioEmEdicao({...usuarioEmEdicao,idade:event.target.value});
                        }}
                        value={usuarioEmEdicao.idade}
                    />
                    <TextField 
                        required={true}
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Estado" 
                        variant="outlined" 
                        onChange={(event) => {
                            setUsuarioEmEdicao({...usuarioEmEdicao,estado:event.target.value});
                        }}
                        value={usuarioEmEdicao.estado}
                    />

                    <TextField 
                        required={true}
                        fullWidth={true}
                        id="outlined-basic" 
                        label="Cidade" 
                        variant="outlined" 
                        onChange={(event) => {
                            setUsuarioEmEdicao({...usuarioEmEdicao,cidade:event.target.value});
                        }}
                        value={usuarioEmEdicao.cidade}
                    />
                <Button variant="contained" color="success" onClick={salvar}>Salvar</Button>
            </Grid>
        )
  )
}

export default UsuarioForm;