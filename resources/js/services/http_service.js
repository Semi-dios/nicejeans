import store from '../store';
import axios from 'axios';


/* Use store.js */
export function http(){
    return axios.create({
        baseURL: store.state.apiURL
    });
}
export function httpfile(){
    return axios.create({
        baseURL: store.state.apiURL,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
