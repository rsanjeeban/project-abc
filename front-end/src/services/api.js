/* eslint-disable */

import axios from "axios";
import env from "../config/config.dev";

const BASE_URL = env.baseUrl;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: false,
  params: {}, // do not remove this, its added to add params later in the config
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Token will be placed in this area
    // config.headers.common["Authorization"] = "Bearer ";
    config.headers.common["Access-Control-Allow-Origin"] = "*";
    config.headers.common["Accept"] = "application/json";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default {
  get(action, params = {}) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.get(url, params);
  },
  post(action, data) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.post(url, data);
  },
  put(action, data) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.put(url, data);
  },
  patch(action, data) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.patch(url, data);
  },
  delete(action, data) {
    let url = `${BASE_URL}`;
    url += action;
    return instance.delete(url, data);
  },
};
