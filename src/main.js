import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import PS4Games from './PS4Games.vue'

Vue.config.productionTip = false

const routes = {
  '/': App,
  '/about': HelloWorld,
  '/ps4games': PS4Games
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || App
    }
  },
  render (h) { return h(this.ViewComponent) }
})