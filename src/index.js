import $ from 'jquery';

import './normalize.css';
import './skeleton.css';
import './main.css';

import mainCntrl from './MainController';

$(document).ready(function () {
	mainCntrl.init();
})