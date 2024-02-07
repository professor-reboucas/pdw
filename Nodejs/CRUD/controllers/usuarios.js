import { v4 as uuid } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    console.log(`Usuários do sistema: ${users}`);
    res.send(users);
}

export const createUser = (req, res) => {   
    const user = req.body;
    users.push({...user, id: uuid()});
    const message = `Usuário [${user.username}] incluído no sistema.`
    console.log(message);
    res.status(201).send(message)
};

export const getUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);
    res.send(user)
};

export const deleteUser = (req, res) => { 
    users = users.filter((user) => user.id !== req.params.id);
    const message = `Usuário id ${req.params.id} foi removido`
    console.log(message);
    res.status(200).send(message)
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    user.username = req.body.username;
    user.age = req.body.age;
    const message = `Usuário alterado para ${req.body.username}. Idade alterada para ${req.body.age}`
    console.log(message);
    res.status(200).send(message)    
};