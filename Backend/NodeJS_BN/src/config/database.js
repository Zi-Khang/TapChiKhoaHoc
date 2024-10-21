const mysql = require('mysql2');
require('dotenv').config();
const { Sequelize } = require('sequelize');

// const connection = mysql.createConnection({
//     host: `${process.env.DB_HOST}`,
//     port: 3307,
//     user: 'root',
//     password: `${process.env.DB_PASSWORD}`,
//     database: `${process.env.DB_NAME}`,
// });



// Kết nối cơ sở dữ liệu với các biến môi trường
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
});

module.exports = sequelize;
