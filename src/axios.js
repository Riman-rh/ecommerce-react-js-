import axios from 'axios'
export const  axiosRequest =(baseURL="http://127.0.0.1:8000")=>{
    const axiosInstance = axios.create({
        baseURL: baseURL,
        timeout:5000,
        headers:{
            authorization: localStorage.getItem('token')
                 ? `JWT ${localStorage.getItem('token')}`
                 : null,
                 'Content-Type':'application/json',
                 accept: 'application/json',
        },
    })
    
    return axiosInstance
    
}

