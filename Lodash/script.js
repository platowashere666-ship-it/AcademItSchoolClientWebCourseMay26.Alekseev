"use strict";

(function () {
    const people = [
        {
            age: 24,
            name: "Аркадий"
        },
        {
            age: 20,
            name: "Евгений"
        },
        {
            age: 31,
            name: "Борис"
        },
        {
            age: 53,
            name: "Борис"
        },
        {
            age: 12,
            name: "Анастасия"
        },
        {
            age: 42,
            name: "Роман"
        },
        {
            age: 23,
            name: "Аркадий"
        },
        {
            age: 8,
            name: "Аркадий"
        },
        {
            age: 25,
            name: "Елизавета"
        },
        {
            age: 29,
            name: "Марк"
        }
    ];

    console.log("Список людей:", people);

    const averageAge = _.meanBy(people, "age");
    console.log("Средний возраст людей из списка: " + averageAge);

    function getPeopleAgedFrom20To30List(people) {
        return _.chain(people)
            .filter(p => p.age >= 20 && p.age <= 30)
            .sortBy("age")
            .value();
    }

    const peopleAgedFrom20To30List = getPeopleAgedFrom20To30List(people);
    console.log("Список людей от 20 до 30 включительно, отсортированный по возрастанию возраста:", peopleAgedFrom20To30List);

    function getUniqueNamesList(people) {
        return _.chain(people)
            .filter(p => p.age >= 20 && p.age <= 30)
            .map("name")
            .uniq()
            .sortBy()
            .reverse()
            .value();
    }

    const uniqueNamesList = getUniqueNamesList(people);
    console.log("Список уникальных имён людей от 20 до 30 включительно, отсортированный по убыванию:", uniqueNamesList);

    const namesCountsMap = _.countBy(people, "name");
    console.log("Подсчёт всех людей поимённо:", namesCountsMap);
})();