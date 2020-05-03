import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHome, faBars } from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faYoutube,
    faTwitter,
    faTwitch
} from '@fortawesome/free-brands-svg-icons';

const loadIcons = (vue: any): void => {
    library.add(faHome, faBars, faInstagram, faYoutube, faTwitter, faTwitch);
    vue.component('fa-icon', FontAwesomeIcon);
};

export default loadIcons;
