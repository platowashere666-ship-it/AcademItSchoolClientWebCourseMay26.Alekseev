"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("temperature_converter_form");
    const temperatureInputTextField = document.getElementById("temperature_input_text_field");
    const temperatureOutputList = document.getElementById("temperature_output_list");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        temperatureInputTextField.classList.remove("invalid");

        const temperatureInputText = temperatureInputTextField.value.trim();
        const celsiusTemperature = parseFloat(temperatureInputText);

        if (temperatureInputText.length === 0 || isNaN(celsiusTemperature)) {
            temperatureInputTextField.classList.add("invalid");
            return;
        }

        temperatureOutputList.innerHTML = "";

        function convertToFahrenheit(celsiusTemperature) {
            return celsiusTemperature * 1.8 + 32;
        }

        function convertToKelvin(celsiusTemperature) {
            return celsiusTemperature + 237.15;
        }

        const fahrenheitOutputText = document.createElement("li");
        fahrenheitOutputText.textContent = "Температура в градусах Фаренгейта: " + convertToFahrenheit(celsiusTemperature);

        const kelvinOutputText = document.createElement("li");
        kelvinOutputText.textContent = "Температура в Кельвинах: " + convertToKelvin(celsiusTemperature);

        temperatureOutputList.appendChild(fahrenheitOutputText);
        temperatureOutputList.appendChild(kelvinOutputText);
    });
});