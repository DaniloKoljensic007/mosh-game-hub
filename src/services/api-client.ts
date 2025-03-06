import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0e728790599a447e8db93cedea1b04c5'
    }

})


