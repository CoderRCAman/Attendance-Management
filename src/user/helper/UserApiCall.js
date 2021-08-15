const { isAuthenticated } = require('../../Authentication/helper/AuthApiCalls')
const API = process.env.REACT_APP_BACKEND;
exports.getUserById = async () => {
    const id = await isAuthenticated()._id;
    return fetch(`${API}/user/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else return response
        })
        .catch(err => {
         console.log(err)
    })
}