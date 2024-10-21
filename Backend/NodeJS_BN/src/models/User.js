const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Định nghĩa model User
const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: false,  // Tắt tự động thêm createdAt và updatedAt
    hooks: {
        beforeCreate: async (user) => {
            user.password = await bcrypt.hash(user.password, saltRounds);
        }
    }
});

module.exports = User;
