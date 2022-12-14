import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store";
import VSwatches from "vue3-swatches";



createApp(App).use(VueAxios, axios).use(VSwatches).use(router).use(store).mount('#app')
