import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import mixins from './mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

createApp(App).use(router).mixin(mixins).use(store).use(VueSweetalert2).mount('#app')

window.Kakao.init('22b001e0aeb64c8690f1a2e9ed9e6cbd')
