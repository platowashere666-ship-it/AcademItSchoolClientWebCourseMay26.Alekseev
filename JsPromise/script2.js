"use strict";

(function () {
    async function getJson(url) {
        try {
            console.log("Начало второй загрузки");

            const response = await fetch(url);

            const data = await response.json();
            console.log(data);

            return data;
        } catch (e) {
            console.log("Ошибка: " + e);
        } finally {
            console.log("Вторая загрузка завершена");
        }
    }

    getJson("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
})();