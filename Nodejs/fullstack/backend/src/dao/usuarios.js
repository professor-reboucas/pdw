import { query } from '../dao/database.js'

const buildObject = (res) =>{
    return {
        id: res["id"],
        nome: res["nome"],
        idade: res["idade"],
        estado: res["estado"],
        cidade: res["cidade"]
    }
}

export const getAllFromBD = async () => {
    const sql = "select * from usuario";
    const res = await query(sql);
    const lista = []
    for (let i in res.rows){
       lista.push(buildObject(res.rows[i]))
    }
    return lista;
}

export const getOneFromBD = async (id) => {
    const sql = `select * from usuario where id = ${id}`;
    const res = await query(sql);
    return res.rows[0] ? buildObject(res.rows[0]) : false;
}

export const persistIntoDB = async (user) => {
    const sql = `insert into usuario ("nome","idade","estado","cidade") values ('${user.nome}','${user.idade}','${user.estado}','${user.cidade}')`;
    const res = await query(sql);
    return true;
}

export const removeFromDB = async (id) => {
    const sql = `delete from usuario where id = ${id}`;
    const res = await query(sql);
    return res.rowCount ? true : false;
}

export const updateInDB = async (id, data) => {
    const sql = `update usuario set 
                    "nome" = '${data.nome}', 
                    "idade" = '${data.idade}',
                    "cidade" = '${data.cidade}',
                    "estado" = '${data.estado}' 
                where id = ${id}`;
    const res = await query(sql);
    return res.rowCount ? true : false;
}


