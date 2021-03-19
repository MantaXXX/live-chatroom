import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// import firebase auth service
import { projectAuth } from './firebase/config'

let app

projectAuth.onAuthStateChanged(() => {
  // once first time do it, it has a value
  if (!app) {
    app = createApp(App)
      .use(router)
      .mount('#app')
  }
})

