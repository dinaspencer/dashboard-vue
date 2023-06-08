import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import * as VueRouter from 'vue-router'
import StudentPage from './pages/StudentPage.vue'
import TeacherPage from './pages/TeacherPage.vue'
import LoginPage from './pages/LoginPage.vue'
import LandingPage from './pages/LandingPage.vue'
import AdminPage from './pages/AdminPage.vue'
import SignUpPage from './pages/SignUpPage.vue'
import SchedulePage from './pages/SchedulePage.vue'
import GoToClassPage from './pages/GoToClassPage.vue'






createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [{
        path: '/',
        component: LandingPage,
    }, {
        path: '/students/:studentId',
        component: StudentPage,
    }, {
        path: '/teachers/:teacherId',
        component: TeacherPage,
    }, {
        path: '/login',
        component: LoginPage,
    }, {
        path: '/admin',
        component: AdminPage,
    }, {
        path: '/signup',
        component: SignUpPage,
    },
    {
        path: '/schedule',
        component: SchedulePage,
    }, 
    {
        path: '/class',
        component: GoToClassPage,
    }
]
}))
.mount('#app')
