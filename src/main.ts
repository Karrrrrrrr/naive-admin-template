import { createApp } from 'vue'
import router from './router'
import store from './store'
import Naive from 'naive-ui'
// import naive from './naive'
import App from './app.vue'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Naive)

app.mount('#app')
