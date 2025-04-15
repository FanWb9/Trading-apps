import{jwtDecode} from 'jwt-decode'; // this import jwt-decode
import axios from 'axios';

//save token in localstorage
export const setToken = (token) => {
    localStorage.setItem('authToken',token);
};

//get token in localstorage
export const getToken = () => {
    return localStorage.getItem('authToken');
};

export const removeToken = () => {
    localStorage.removeItem('authToken');
};

export const getUserInfo = () => {
    const token = getToken();
    if(!token) return null;

    try{
        const decodeToken = jwtDecode(token);
        return decodeToken;
    }catch(eror){
        console.error('invalid token or error decoding token',error);
    }
};

export const handleLogout = () => {
    removeToken();
    window.location.href = '/';
};

export const setAxiosDefaults = () => {
    const token = getToken();
    if (token){
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};