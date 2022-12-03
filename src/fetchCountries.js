import Notiflix from 'notiflix';
import { listOfCountriesRef, boxForCountry } from './index';

Notiflix.Notify.init({
    borderRadius: '10px',
    position: 'center-center',
     warning: {
    background: '#eebf31',
    textColor: 'black',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});
export function fetchCountries(name) {
    console.log(name);
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,population,flag,languages`)
        .then(response => { return response.json() })
        .then(countryInf => {
            if (countryInf.length > 10) {
                clearContent();
                return Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.');
            };
            if (countryInf.length >= 2 && countryInf.length <= 10) {
                boxForCountry.innerHTML = '';

               return createListForCountries(countryInf);
            };
           
            if (countryInf.length = 1) {
                clearContent();
                return createCountry(countryInf);
            };
            if (!countryInf.length) {
                clearContent();
            };

        })
        .catch((error) => {
            console.log(error);
             Notiflix.Notify.failure('Oops, there is no country with that name');
        });
};

function createCountry(countryInf) { 
return boxForCountry.insertAdjacentHTML('afterbegin',
                     `<div class ="countryFlagBox">
                <img class = "imgFlagOfCountry" src="${countryInf[0].flag}" alt="flag of ${countryInf[0].name}" />
                 <h2 class = "titleOfCountry">${countryInf[0].name}</h2>
                 </div>
                    <ul class = "countryList">
                      <li><p><span class = "nameOfList">Capital:</span>${countryInf[0].capital}</p></li>
                      <li><p><span class = "nameOfList">Population:</span>${countryInf[0].population}</p></li>
                      <li><p><span class = "nameOfList">Langueges:</span>${countryInf[0].languages[0].name}</p></li>
                    </ul>`);
};

function createListForCountries(countryInf) { 
 const elementCountries = countryInf.map((country) =>
    `<li>
    <div class ="countryFlagBox">
    <img class = "imgFlagOfCountry" src="${country.flag}" alt="flag of ${country.name}">
    <p>${country.name}</p>
    </div>
    </li>`).join("");
    return listOfCountriesRef.insertAdjacentHTML('afterbegin', elementCountries);
};

function clearContent() {
    boxForCountry.innerHTML = '';
    listOfCountriesRef.innerHTML = '';
}
