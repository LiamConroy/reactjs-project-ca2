import axios from 'axios'

export default axios.create({
    baseURL: "https://supplies-server.herokuapp.com/"
})