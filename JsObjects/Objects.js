"use strict";

(function () {
    const countries = [{
        name: "Russia",
        cities: [{
            name: "Moscow",
            population: 13300000
        }, {
            name: "Novosibirsk",
            population: 1637266
        }]
    }, {
        name: "Belarus",
        cities: [{
            name: "Minsk",
            population: 1995091
        }, {
            name: "Brest",
            population: 347894
        }]
    }, {
        name: "USA",
        cities: [{
            name: "Los Angeles",
            population: 3869089
        }, {
            name: "New York",
            population: 8584629
        }, {
            name: "Chicago",
            population: 2731585
        }]
    }];

    function getMaxCitiesCount(countries) {
        let result = 0;

        for (let i = 0; i < countries.length; ++i) {
            if (result < countries[i].cities.length) {
                result = countries[i].cities.length;
            }
        }

        return result;
    }

    const maxCitiesCount = getMaxCitiesCount(countries);

    const countriesWithMaxCities = countries.filter(e => e.cities.length === maxCitiesCount);
    console.log(countriesWithMaxCities);

    function getTotalPopulation(country) {
        let populationSum = 0;

        for (let i = 0; i < country.cities.length; ++i) {
            populationSum += country.cities[i].population;
        }

        return populationSum;
    }

    function getCountriesMap(countries) {
        return countries.reduce((acc, country) => {
            acc[country.name] = getTotalPopulation(country);
            return acc;
        }, {});
    }

    console.log(getCountriesMap(countries));
})();