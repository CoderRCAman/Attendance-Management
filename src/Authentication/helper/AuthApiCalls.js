const axios = require('axios')
const API = process.env.REACT_APP_BACKEND;
const signin = async (data) => {
    return await axios.post(`${API}/signin`,
        data
    ).then(response => {
        console.log(response)
        return response
    }).catch(error => {
        return Promise.reject(error)
    });
}

const authenticate = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
}

const isAuthenticated = () => {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
}

module.exports = { signin, authenticate, isAuthenticated };