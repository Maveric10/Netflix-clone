import axios from "axios";

// base url to make request to the movie database

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

//if we do instance.get('/hello')
//then our url becomes https://api.themoviedb.org/3/hello


export default instance;