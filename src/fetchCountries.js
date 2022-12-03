import Notiflix from 'notiflix';
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
               Notiflix.Notify.warning('Too many matches found. Please enter a more specific name.'); 
            }
            console.dir(countryInf);
            console.log(countryInf.length);
        })
};
// https://restcountries.com/v2/{service}?fields={name.official},{capital},{population},{flags.svg},{languages}
// name.official - повна назва країни
// capital - столиця
// population - населення
// flags.svg - посилання на зображення прапора
// languages - масив мов