import Vue from 'vue'
import VueRouter from 'vue-router'
import Calendar from '../views/Calendar.vue'

import DayFactory from "@/components/simplified/DayFactory";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Calendar',
        component: Calendar,
        props: true
    },
    {
        path: '/day/:day',
        name: "DayFactory",
        component: DayFactory,
        props: true
    }
]

const router = new VueRouter({
    routes
})

export default router
