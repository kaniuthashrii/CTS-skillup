import axios from "axios";

const apiClient = axios.create({

  baseURL: "https://jsonplaceholder.typicode.com",

  timeout: 5000,

  headers: {

    Authorization: "Bearer MOCK_TOKEN",

    "Content-Type": "application/json"

  }

});

apiClient.interceptors.request.use(config => {

  config.headers.Authorization = "Bearer MOCK_TOKEN";

  return config;

});

apiClient.interceptors.response.use(

  response => response.data,

  error => {

    throw {

      message: error.message,

      statusCode: error.response?.status || 500

    };

  }

);

export default apiClient;