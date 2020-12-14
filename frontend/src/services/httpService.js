import axios from "axios";

class HttpService {

    async get(url){
        try {
            return await axios.get(url);
        } catch (e) {
            return e
        }
    }
}

export default new HttpService();