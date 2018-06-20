import axios from 'axios'
import { Message } from 'element-ui'
import httpErrors from './/httpErrors'

const HTTP_REQ_ERR = httpErrors.HTTP_REQ_ERR

// config
const base_url = 'http://localhost:9090';
axios.defaults.withCredentials = true;

// create an axios instance
const service = axios.create( {
  baseURL: base_url,
  timeout: 5000,
  headers: {"Access-Control-Allow-Origin": "*"},
})


// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)  // for debug
    Promise.reject(error)
  }
)

// response interceptors
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    let errDetail;
    if (error && error.response) {
      console.log("response is ok");
      errDetail = error.response.data;
      error.message = HTTP_REQ_ERR['' + (errDetail.err || 0)] || 'Unknown error';
    }
    console.log('err' + error);
    Message ({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    });
    return Promise.reject(error)
  }
);

export default service
