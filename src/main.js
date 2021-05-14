import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directive from './components/base/loading/directive'
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).directive('loading',directive).mount('#app')
