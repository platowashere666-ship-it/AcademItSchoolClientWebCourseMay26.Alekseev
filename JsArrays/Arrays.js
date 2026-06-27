"use strict";

(function () {
    const numbers = [4, 2, 1, 7, 6, 8, 4, 2, 1, 14, 643, 1000, 3];

    numbers.sort((e1, e2) => e2 - e1);

    console.log("Отсортированный по убыванию массив: " + numbers);

    const largestFiveNumbers = numbers.slice(0, 5);
    console.log("Подмассив из первых 5 элементов: " + largestFiveNumbers);

    const smallestFiveNumbers = numbers.slice(-5);
    console.log("Подмассив из последних 5 элементов: " + smallestFiveNumbers);

    function getEvenNumbersSum(numbers) {
        return numbers.reduce((sum, e) => {
            if (e % 2 === 0) {
                return sum + e;
            }

            return sum;
        }, 0);
    }

    console.log("Сумма чётных элементов массива: " + getEvenNumbersSum(numbers));

    const numbersFromOneToHundred = [];

    for (let i = 1; i <= 100; ++i) {
        numbersFromOneToHundred.push(i);
    }

    function getEvenNumbersSquaresArray(numbers) {
        return numbers
            .filter(e => e % 2 === 0)
            .map(e => e * e);
    }

    console.log("Список квадратов чётных элементов второго массива: " + getEvenNumbersSquaresArray(numbersFromOneToHundred));
})();