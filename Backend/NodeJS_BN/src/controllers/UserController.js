const { json } = require('sequelize');
const { createUserServices } = require('../Services/UserServices');

const createUser = async (req, res) => {
    console.log("Check: ", req.body);
    const { email, password} = req.body;
    const data = await createUserServices(email, password)
    if (data) {
        return res.status(200).json(data);
    }
    else
        return json("Tạo người dùng thất bại")
    
}    
const loginUser = async (req, res) => {
    // console.log("Check: ", req.body);
    // const {email, password} = req.body;
}



module.exports = {
    createUser,
    loginUser,
}