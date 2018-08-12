import Vue from 'vue';
import { apiUrl, clientToken } from '../.sensitive.json';

import { DirectusFetcher } from 'jsapi-torchiodev.com';
import { Api } from 'jsapi-torchiodev.com';

let fetcher = new DirectusFetcher(apiUrl);
    fetcher.setAuthorizationHeader(clientToken);
let api = new Api(fetcher);

const plugin = {
  install(Vue) {
    Vue.prototype.$api = api;
  }
}

Vue.use(plugin);

export default ({ app }) => {app.$api = api};