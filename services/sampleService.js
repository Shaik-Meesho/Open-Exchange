// services/userService.js
const users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

const getUserById = (id) => {
    return users.find(user => user.id === parseInt(id));
};

const getAllUsers = () => {
    return users;
};

const addUser = (user) => {
    users.push(user);
};

module.exports = {
    getUserById,
    getAllUsers,
    addUser
};
