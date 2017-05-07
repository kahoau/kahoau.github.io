import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './components/App.vue'
import { routes } from './routes'
import Dialog from 'wovue-dialog'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Dialog)

const router = new VueRouter({
        routes,
        mode: 'history'
})

new Vue({
        el: '#app',
        router,
        render: h => h(App)
})
