import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import VueParticles from 'vue-particles';
import './CSS/responsive-app.css';
import { gsap } from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CursorFx } from '@luxdamore/vue-cursor-fx';
import '@luxdamore/vue-cursor-fx/dist/CursorFx.css';

library.add(fas);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(AOS);
app.use(gsap);
app.use(CursorFx);
app.use(VueParticles);
app.mount('#app');

