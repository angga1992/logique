import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store";


createApp(App).use(router).use(store).mount('#app')
App.use(VueAxios, axios)
