import '../styles/styles.css'

import modal from './modules/modal';
import insertData from './modules/insertData';
import consumeSWAPI from './modules/consumeSWAPI';
import './modules/jquery.carousel-vertical.min'
import features from './modules/features'
import loader from './modules/loader'

document.body.setAttribute("style", "overflow-y: hidden;")

function first() {
    
    new modal();
    let data = new consumeSWAPI();
    new insertData(data);
}

async function second() {
    first();
   
    setTimeout(() => { 
        $('.cv-carousel').carouselVertical({
            nav: false, 
            margin: 20,
            items: 10,
 
            }
        );
        new features();
        new loader();
    }, 4000);
}

second();


