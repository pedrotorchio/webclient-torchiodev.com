import Vue from 'vue';
import { VuePlugin } from 'jsapi-torchiodev.com';
import { apiUrl, clientToken } from '../.sensitive.json';

console.dir (VuePlugin);

Vue.use(VuePlugin, {
  baseUrl: apiUrl,
  authentication: clientToken 
});