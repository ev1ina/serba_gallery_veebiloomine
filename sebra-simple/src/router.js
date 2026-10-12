import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ArtistsView from './views/ArtistsView.vue';
import ArtistView from './views/ArtistView.vue';
import RasmusView from './views/RasmusView.vue';
import LiisView from './views/LiisView.vue';
import CoursesView from './views/CoursesView.vue';
import CourseView from './views/CourseView.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/artists', component: ArtistsView },
        { path: '/artist', component: ArtistView },
        { path: '/artist/rasmus', component: RasmusView },
        { path: '/artist/liis', component: LiisView },
        { path: '/courses', component: CoursesView },
        { path: '/course', component: CourseView },
    ],
    scrollBehavior(to) {
        if (to.hash) return { el: to.hash };
        return { top: 0 };
    },
});
