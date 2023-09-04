import axios from "axios";
const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})
export const GetPersonajes = async() => {
    const url = '/character'
    const response = await instance.get(url);
    return response.data.results;
}

