import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/main.css'

createApp(App).use(store).use(router).mixin(mixins).mount('#app')
