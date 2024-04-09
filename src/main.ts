import './assets/main.css'
import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { router } from '@/router/router'
import pl from '@/locales/pl.json'
import en from '@/locales/en.json'

const i18n = createI18n({
  locale: 'pl',
  fallbackLocale: 'pl',
  legacy: false,
  messages: {
    pl: pl,
    en: en
  }
})
const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(i18n)

app.mount('#app')
