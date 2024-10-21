const express = require('express');
const routerAPI = express.Router();
const {createUser, loginUser} = require('../controllers/UserController');


routerAPI.get('/', (req, res) => {
    return res.status(200).json("Hellow World thanh cong");
});

routerAPI.post('/register', createUser);

routerAPI.post('/login', loginUser);



module.exports = routerAPI;