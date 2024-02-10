import { v4 as uuid } from 'uuid';

let users = [];

export const getUsersData = () => users;
export const getUserData = (id) => {
    return users.find((user) => user.id === id);
};
export const newUser = (user) => {
    users.push({...user, id: uuid()});
};
export const removeUser = (id) => {
    users = users.filter((user) => user.id !== id);
    return
};
export const editUser = (id, data) => {
    const user = users.find((user) => user.id === id);
    user.username = data.username;
    user.age = data.age;
    return
};
    