import {getUsersData, getUserData, newUser, removeUser, editUser} from '../models/usuarios.js'

export const getUsers = async (req, res) => {
    const users = await getUsersData();
    console.log(`Usuários do sistema: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
    newUser(user);
    const message = `Usuário [${user.nome}] incluído no sistema.`
    console.log(message);
    res.status(201).send(message)
};

export const getUser = async (req, res) => {
    const user = await getUserData(req.params.id);
    if (user){
        res.send(user)
    } else {
        res.status(404).send("Usuário não encontrado")
    }
};

export const deleteUser = async (req, res) => { 
    const result = await removeUser(req.params.id);
    const status = result ? 200 : 404;
    const message = result ? `Usuário id ${req.params.id} foi removido` : "Usuário não encontrado"
    console.log(message);
    res.status(status).send(message)
};

export const updateUser =  async (req,res) => {
    editUser(req.params.id, req.body)
    const message = `Usuário alterado para ${req.body.nome}. Idade alterada para ${req.body.age}`
    console.log(message);
    res.status(200).send(message)    
};