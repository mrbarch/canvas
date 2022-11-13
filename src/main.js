import Vue from 'vue'
import App from './App.vue'
import VScroll from "@/VScroll";

Vue.directive('scroll', VScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
