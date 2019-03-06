import Vue from 'vue'
import Router from 'vue-router'
const Main = resolve => require(['@/components/pages/Main.vue'], resolve)
const Register = resolve => require(['@/components/pages/Register.vue'], resolve)
const Login = resolve => require(['@/components/pages/Login.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
