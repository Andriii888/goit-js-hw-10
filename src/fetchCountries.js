
export function fetchCountries(val) {
   return fetch(`https://restcountries.com/v2/name/${val}?fields=name,capital,population,flag,languages`)
       .then(response => {
           if (!response.ok) {
       throw new Error(response.status);
           }
           return response.json()
       })
        
};

