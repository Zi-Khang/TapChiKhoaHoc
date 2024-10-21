require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const express = require('express');
const cors = require('cors');
const path = require('path');
const connection = require('./config/database');
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;
const webRouter = require('./routes/web')
const webRouterAPI = require('./routes/api')
const User = require('./models/User');


configViewEngine(app);

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/v1/api', webRouterAPI);
app.listen(port, hostname, () => {
    console.log(`Example app listening for port ${port}`);
});



(async () => {
    try {
        const user = await User.findByPk(1, {
            raw: true, // Trả về kết quả đơn giản thay vì đối tượng Sequelize
            attributes: ['id', 'email', 'password'] // Chỉ chọn các cột cần thiết
        });
        
        console.log(user); // In ra danh sách người dùng với chỉ các trường id, email, password
    } catch (error) {
        console.error('Error fetching users:', error);
    }
})();

