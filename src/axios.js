import axios from 'axios'

const instance = axios.create ({
    baseURL: 'http://ec2-18-205-119-170.compute-1.amazonaws.com:8080/api/'
})

export default instance