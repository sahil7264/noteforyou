const { User } = require('../../models');
const getAllUsers = async (req) => {
    try {
        let users = await User.find();
        users = users.map(user => user.email);
        return users;
    } catch (error) {
        return error;
    }
};
module.exports = {
    getAllUsers
};
