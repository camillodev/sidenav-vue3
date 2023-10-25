import { createApp } from 'vue';
import App from './App.vue';
import { Quasar } from 'quasar'

const app = createApp(App);
app.use(Quasar, {
  config: {
    brand: {
      primary: '#1976d2',
    }
  } 
});
app.mount('#app');
