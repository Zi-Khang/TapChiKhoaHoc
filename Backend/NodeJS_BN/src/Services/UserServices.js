const connection = require('../config/database');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// const createUserServices = async (email, password) => {
//     const hashPassword = await bcrypt.hash(password, saltRounds)
//     try {
//         const query = 'INSERT INTO Users (email, password) VALUES (?, ?)';
//         const values = [email, hashPassword];
        
//         await connection.promise().query(query, values, (error, results) => {
//             if (error) {
//                 throw error;
//             }
//             console.log('User inserted:', results);
//         });
//     } catch (error) {
//         console.log('Error in createUserServices:', error);
//         return null;
//     }
//     return 'Tao user moi thanh cong';
// }

// Tạo người dùng
const createUserServices = async (email, password) => {
    try {
        const newUser = await User.create({ email, password });
        return newUser;
    } catch (error) {
        console.log('Error in createUser:', error);
        return null;
    }
};
const loginServices = async (req, res) =>{
    try {
        const query = 'select * from Users where email = ? and password = ?';
        const values = [email, password];
        
        await connection.promise().query(query, values, (error, results) => {
            if (error) {
                throw error;
            }
            console.log('User inserted:', results);
        });
    } catch (error) {
        console.log('Error in createUserServices:', error);
        return null;
    }
    return 'Tao user moi thanh cong';
}


module.exports = {
    createUserServices
}