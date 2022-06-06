import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/'
const KEY = 'key=26842987-082bbd3c37dcbed35dbe75126'

export default class ApiService {
    async getImages(query, page) {
        const {data} = await axios.get(`${BASE_URL}?q=${query}&page=${page}&${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        return data.hits
    }
}