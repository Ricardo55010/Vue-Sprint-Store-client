import { createRouter, createWebHistory } from "vue-router"
import HelloWorld from "@/components/HelloWorld.vue";
const routeInfos = [
    {
        path : "/",
        component : HelloWorld
    },

]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;