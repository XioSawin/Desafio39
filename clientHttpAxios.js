const axios = require('axios')

const url = 'http://localhost:5504/productos';
const urlModify = 'http://localhost:5504/productos/5';


let producto = {
    id: 5,
    nombre: 'AMCF1 OFFICIAL TEAM POLO', 
    codigo: 1376, 
    precio: 65,
    stock: 5
}

const axiosGet = async () => {
    try {
        const resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.log(err);
    }
};

const axiosPost = async () => {
    try {
        const resp = await axios.post(url, producto);
        console.log(resp.data);
    } catch (err) {
        console.log(err);
    }
};

const axiosPut = async () => {
    try {
        const resp = await axios.put(urlModify, {stock: 18});
        console.log(resp.data);
    } catch (err) {
        console.log(err);
    }
};

const axiosDelete = async () => {
    try {
        const resp = await axios.delete(`${urlModify}`);
        console.log(resp.data);
    } catch (err) {
        console.log(err);
    }
};

axiosGet();
axiosPost();
axiosPut();
axiosDelete();