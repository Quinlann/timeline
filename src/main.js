import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';



/* ---- FONT AWSOME ---- */

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faExplosion } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faMap,faGlobe,faLocationDot,faLocationCrosshairs,faMagnifyingGlass,faPlus,faMinus,faUser,faPen,faTrash,faRoute,faSun,faFeatherPointed,faSkull,faXmark,faSliders,faExplosion,faCheck);

/* ^^^^ FONT AWSOME ^^^^ */



const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');