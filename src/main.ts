import Vue from 'vue'
import App from './App.vue'
import GloballyLoaded from '@/components/GloballyLoaded.vue'

Vue.config.productionTip = false
Vue.component('GloballyLoaded', GloballyLoaded)


new Vue({
  render: h => h(App),
}).$mount('#app')
