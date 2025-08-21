// Methods that modify the original array (mutability)

// push ()

const countries = ['USA', 'Canada', 'Mexico'];
const newCountries = countries.push('Brazil', 'Argentina');
console.log(countries);
console.log(newCountries);

const removedCountry = countries.pop();
console.log(countries);
console.log(removedCountry);
