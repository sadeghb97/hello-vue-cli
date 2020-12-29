import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import PS4Games from './PS4Games.vue'

//Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: App, name: "home", meta:{title: "Home"}},
  {path: '/about', component: HelloWorld, name: "about", meta:{title: "About"}},
  {path: '/ps4games', component: PS4Games, name: "ps4", meta:{title: "PS4Games"}}
]
const router = new VueRouter({
  routes: routes
})

new Vue({
  router: router,
  data: {
    curRoute: window.location.pathname
  },
  computed:{
    CurrentRoute(){
      var curRoute = this.curRoute;
      return routes.find(function(x){
        return x.path == curRoute
      }) || routes[0]
    },
    ViewComponent(){
      return this.CurrentRoute.component
    },
    Title(){
      return this.CurrentRoute.meta.title
    }
  },
  created: function(){
    document.title = this.Title
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')

