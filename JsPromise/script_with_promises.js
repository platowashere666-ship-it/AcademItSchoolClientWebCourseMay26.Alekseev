"use strict";

(function () {
    console.log("Начало загрузки с Promises");

    fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
        .then(response => response.json())
        .then(data => console.log("Данные с Promises:", data))
        .catch(e => console.log("Ошибка с Promises: " + e))
        .finally(() => console.log("Загрузка с Promises завершена"));
})();