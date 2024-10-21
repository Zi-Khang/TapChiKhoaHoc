import axios from 'axios';


const createUserAPI = (email, password) => {
    const URL_API = "http://localhost:3000/v1/api/register"
    const data = {
        email,
        password,
    }
    return axios.post(URL_API, data)
}

export {
    createUserAPI,
}