"use strict";

(function () {
    console.log("Начало загрузки");

    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(e => console.log("Ошибка: " + e))
        .finally(() => console.log("Загрузка завершена"));
})();