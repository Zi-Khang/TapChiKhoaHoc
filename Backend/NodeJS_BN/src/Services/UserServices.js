const { name } = require('ejs');
const connection = require('../config/database');
require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require("jsonwebtoken");

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
const loginServices = async (email, password) => {
    try {
        const user = await User.findOne({ where: { email } })
        if (user) {
            const isMatchPassword = await bcrypt.compare(password, user.password)
            if (!isMatchPassword) {
                return {
                    EC: 1,
                    EM: "Email/Password không hợp lệ",
                }
            } else {
                const payload = {
                    email: email,
                }
                const access_token = jwt.sign(
                    payload, 
                    process.env.JWT_SECRET,
                    {
                        expiresIn: process.env.JWT_EXPIRE,
                    }
                    
                )
                return {
                    EC: 0,
                    access_token,
                    user: {
                        name: user.name,
                        email: user.email,
                    }
                }
            }
        } else {
            return {
                EC: 2,
                EM: "Email/Password không hợp lệ",
            }
        }
    } catch (error) {
        console.log('Error in createUserServices:', error);
        return null;
    }
}


module.exports = {
    createUserServices,
    loginServices
}