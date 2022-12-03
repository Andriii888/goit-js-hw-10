let debounce = require('lodash.debounce');
import './css/styles.css';
import { fetchCountries } from './fetchCountries'

const DEBOUNCE_DELAY = 300;
const inputCountryRef = document.querySelector('#search-box');
export const listOfCountriesRef = document.querySelector('.country-list');
export const boxForCountry = document.querySelector('.country-info');
inputCountryRef.addEventListener('input',debounce(e => {
    let name = e.target.value;
    console.log(name);
    fetchCountries(`${name}`);

},DEBOUNCE_DELAY) );
