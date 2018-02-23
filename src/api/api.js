import axios from 'axios';

let base = '';


// export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const requestLogin = params => { console.log(params); return axios.post(`${base}/login`, params).then(res => {
    console.log(res, 12321312)
    return res.data
}); };