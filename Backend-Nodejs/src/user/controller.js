const { getUsers, addUser } = require('./service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const TOKEN_SECRET = process.env.TOKEN_SECRET || "";

async function get(req, res) {
    try {
        console.log(req.query);

        // if (req.query.id) { // ?id=k1231 -> query paramet
        //     const id = req.query.id;
        //     const result = await getById(id);
        //     console.log('result of specific user =>', result);
        //     return res.send(result);
        // }

        const result = await getUsers();
        console.log('result =>', result);

        return res.send(result);
    } catch (error) {
        console.log(error);
    }
}
async function register(req, res) {
    try {
        console.log(req.body);


        const hashPassword = req.body.password;

        const addUserResult = await addUser(req.body, hashPassword);
        console.log('addUserResult =>', addUserResult);

        return res.send({ user: addUserResult._id });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    get,
    register
}