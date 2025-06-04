import axios from "axios";

const registerUser = (data) => {
    return axios.post('http://localhost:8080/api/v1/user/register',data)
};

const loginUser = (data) => {
    return axios.post('http://localhost:8080/api/v1/user/login', data)
};

const AuthServices = {registerUser, loginUser}

export default AuthServices