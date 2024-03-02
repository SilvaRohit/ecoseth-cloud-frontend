import '@/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import App from '@/App.vue'
import router from '@/router'
import ToastService from 'primevue/toastservice'

const pinia = createPinia()
const app = createApp(App)
const port = process.env.example.PORT || 8080;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use(router)

app.use(PrimeVue)

app.use(ToastService)

app.use(pinia)

app.mount('#app')
