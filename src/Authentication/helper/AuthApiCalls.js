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
    sessionStorage.setItem('user', JSON.stringify(data));
}

const isAuthenticated = () => {
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : false
}

module.exports = { signin, authenticate, isAuthenticated };