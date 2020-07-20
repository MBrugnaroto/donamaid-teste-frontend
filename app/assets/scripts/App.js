import '../styles/styles.css'

import modal from './modules/modal';
import insertData from './modules/insertData';
import consumeSWAPI from './modules/consumeSWAPI';

new modal();
let data = new consumeSWAPI();
new insertData(data);




