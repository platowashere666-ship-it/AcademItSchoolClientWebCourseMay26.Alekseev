"use strict";

(function () {
    const array = [4, 2, 1, 7, 6, 8, 4, 2, 1, 14, 643, 1000, 3];

    array.sort(function (e1, e2) {
        return e2 - e1;
    });

    console.log("Отсортированный по убыванию массив: " + array);

    const subArray = array.slice(0, 5);
    console.log("Подмассив из первых 5 элементов: " + subArray);

    const subArray2 = array.reverse().slice(0, 5);
    console.log("Подмассив из последних 5 элементов: " + subArray2);

    function getEvenNumbersSum(array) {
        const evenNumbersArray = array.filter(e => e % 2 === 0);

        return evenNumbersArray.reduce((sum, current) => sum + current, 0);
    }

    console.log("Сумма чётных элементов массива: " + getEvenNumbersSum(array));

    const array2 = [];

    for (let i = 1; i <= 100; ++i) {
        array2.push(i);
    }

    function getEvenNumbersSquaresArray(array) {
        return array
            .filter(e => e % 2 === 0)
            .map(e => e * e);
    }

    console.log("Список квадратов чётных элементов второго массива: " + getEvenNumbersSquaresArray(array2));
})();