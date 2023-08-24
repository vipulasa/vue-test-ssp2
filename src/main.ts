import { createApp } from 'vue'
import { createStore } from 'vuex'
import './style.css'
import App from './App.vue'
import {
    createRouter,
    createWebHashHistory
} from 'vue-router'


// store
// Create a new store instance.
const store = createStore({
    state () {
        return {
            count: 0,
            user : {}
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        setUser (state, user) {
            state.user = user
        }
    },
    actions: {
        loginUser ({ commit }, user) {
            commit('setUser', user.value)
        }
    }
})


const routes = [
    {
        path: '/',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/about',
        component: () => import('./views/About.vue')
    },
    {
        path: '/gallery',
        component: () => import('./views/Gallery.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');
