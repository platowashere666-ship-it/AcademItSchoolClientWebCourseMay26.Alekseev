"use strict";

(function () {
    const array = [4, 2, 1, 7, 6, 8, 4, 2, 1, 14, 643, 1000, 3];

    array.sort(function (e1, e2) {
        return e2 - e1;
    })

    console.log(array);

    const array1 = array.slice(0, 5);
    console.log(array1);

    const array2 = array.slice(array.length - 5);
    console.log(array2);

    const evenArray = array.filter(e => e % 2 === 0);
    console.log(evenArray);

    let elementsSum = 0;

    for (let i = 0; i < evenArray.length; ++i) {
        elementsSum += evenArray[i];
    }

    console.log(elementsSum);
})();

(function () {
    const array = [];

    for (let i = 1; i <= 100; ++i) {
        array.push(i);
    }

    const evenArray = array.filter(e => e % 2 === 0);

    const result = [];

    for (let i = 0; i < evenArray.length; ++i) {
        result.push(evenArray[i] ** 2);
    }

    console.log(result);
})();