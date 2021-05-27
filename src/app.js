import MainLayout from './layouts/MainLayout.js';
import Default from './components/Main.js';

const App = {
  setup() {
    Vue.provide('component', Default);
  },
  render: () => Vue.h(MainLayout),
};

Vue.createApp(App).mount('#app');
