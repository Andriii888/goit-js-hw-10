let debounce = require('lodash.debounce');
import './css/styles.css';
import {fetchCountries} from './fetchCountries'
const DEBOUNCE_DELAY = 300;
const inputCountryRef = document.querySelector('#search-box');
inputCountryRef.addEventListener('input',debounce(e => {
    let name = e.target.value;
    console.log(name);
    fetchCountries(`${name}`);

},300) );
