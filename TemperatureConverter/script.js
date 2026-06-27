"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("temperature_converter_form");
    const temperatureInputTextField = document.getElementById("temperature_input_text_field");
    const temperatureOutputList = document.getElementById("temperature_output_list");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        temperatureInputTextField.classList.remove("invalid");

        const temperatureInputValueText = temperatureInputTextField.value.trim();

        if (temperatureInputValueText.length === 0 || isNaN(temperatureInputValueText)) {
            temperatureInputTextField.classList.add("invalid");
            return;
        }

        const celsius = parseFloat(temperatureInputTextField.value);

        temperatureOutputList.innerHTML = "";

        const fahrenheitOutputText = document.createElement("li");
        fahrenheitOutputText.textContent = `Температура в Фаренгейтах: ${(celsius * 1.8 + 32).toFixed(3)}`;

        const kelvinOutputText = document.createElement("li");
        kelvinOutputText.textContent = `Температура в Кельвинах: ${(celsius + 273.15).toFixed(3)}`;

        temperatureOutputList.appendChild(fahrenheitOutputText);
        temperatureOutputList.appendChild(kelvinOutputText);
    });
});