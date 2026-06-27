"use strict";

(function () {
    const countries = [
        {
            name: "Russia",
            cities: [
                {
                    name: "Moscow",
                    population: 13300000
                },
                {
                    name: "Novosibirsk",
                    population: 1637266
                }]
        },
        {
            name: "Belarus",
            cities: [
                {
                    name: "Minsk",
                    population: 1995091
                },
                {
                    name: "Brest",
                    population: 347894
                }]
        },
        {
            name: "USA",
            cities: [
                {
                    name: "Los Angeles",
                    population: 3869089
                },
                {
                    name: "New York",
                    population: 8584629
                },
                {
                    name: "Chicago",
                    population: 2731585
                }]
        }];

    function getMaxCitiesCount(countries) {
        return countries.reduce((maxCitiesCount, country) => {
            return Math.max(maxCitiesCount, country.cities.length);
        }, 0);
    }

    function getCountriesWithMaxCitiesCount(countries) {
        const maxCitiesCount = getMaxCitiesCount(countries);

        return countries.filter(c => c.cities.length === maxCitiesCount);
    }

    console.log("Страны с наибольшим кол-вом городов:", getCountriesWithMaxCitiesCount(countries));

    function getTotalPopulation(country) {
        return country.cities.reduce((sum, city) => sum + city.population, 0);
    }

    function getCountriesPopulationMap(countries) {
        const countriesPopulationMap = {};

        countries.forEach(country => {
            countriesPopulationMap[country.name] = getTotalPopulation(country);
        });

        return countriesPopulationMap;
    }

    console.log("Объект с информацией по всем странам (название: население):", getCountriesPopulationMap(countries));
})();