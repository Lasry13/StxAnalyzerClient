import axios from "axios";

export const getRequestOptions = (method, url, data) => {
    return {
        method: method,
        url: url,
        data: data
    }
}

export const doRequest = async (options) => {
    return axios(options);
}
