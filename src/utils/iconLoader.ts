import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram,
    faYoutube,
    faTwitter,
    faTwitch
} from '@fortawesome/free-brands-svg-icons';

const loadIcons = (vue: any): void => {
    library.add(faHome, faInstagram, faYoutube, faTwitter, faTwitch);
    vue.component('icon', FontAwesomeIcon);
};

export default loadIcons;
