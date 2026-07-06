"use strict";

(async function () {
    async function getJson(url) {
        try {
            console.log("Начало загрузки с async/await");

            const response = await fetch(url);

            const data = await response.json();
            console.log("Данные с async/await:", data);

            return data;
        } catch (e) {
            console.log("Ошибка с async/await: " + e);
        } finally {
            console.log("Загрузка с async/await завершена");
        }
    }

    await getJson("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
})();