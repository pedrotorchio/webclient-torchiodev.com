import Vue from 'vue';
import { DirectusFetcher, Api }  from 'jsapi-torchiodev.com';
import { apiUrl, clientToken } from '~/.sensitive';

const fetcher = new DirectusFetcher(apiUrl)
   .setAuthorizationHeader(clientToken);
const api     = new Api(fetcher);

const plugin = {
  install(Vue) {
    Vue.prototype.$api = api;
  }
}

Vue.use(plugin);