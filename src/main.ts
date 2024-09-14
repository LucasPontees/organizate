import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// LAYOUTS //
import Sidebar from './layouts/Sidebar.vue'
import Navbar from './layouts/Navbar.vue'
import DefaultLayout from './layouts/DefaultLayout.vue'

createApp(App)
    .component('Sidebar', Sidebar)
    .component('Navbar', Navbar)
    .component('DefaultLayout', DefaultLayout)
    .use(router)
    .mount('#app')
