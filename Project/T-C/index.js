const celciusEl = document.getElementById("celcius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");
const resetButton = document.getElementById("btn");


function computeTemp(event) {
    const currentValue = +event.target.value;
    const inputName = event.target.name;

    switch (inputName) {
        case "celcius":
            if (currentValue < -273.15) {
                alert("Celsius temperature cannot be below absolute zero (-273.15°C).");
                celciusEl.value = "";
            } else {
                kelvinEl.value = (currentValue + 273.15).toFixed(2);
                fahrenheitEl.value = ((currentValue * 9 / 5) + 32).toFixed(2);
            }
            break;
        case "fahrenheit":
            if (currentValue < -459.67) {
                alert("Fahrenheit temperature cannot be below absolute zero (-459.67°F).");
                fahrenheitEl.value = "";
            } else {
                celciusEl.value = ((currentValue - 32) * 5 / 9).toFixed(2);
                kelvinEl.value = ((currentValue - 32) * 5 / 9 + 273.15).toFixed(2);
            }
            break;
        case "kelvin":
            if (currentValue < 0) {
                alert("Kelvin temperature cannot be below absolute zero.");
                kelvinEl.value = "";
            } else {
                celciusEl.value = (currentValue - 273.15).toFixed(2);
                fahrenheitEl.value = ((currentValue - 273.15) * 9 / 5 + 32).toFixed(2);
            }
            break;
        default:
            break;
    }
}
resetButton.addEventListener("click", resetValues);


function resetValues() {
    celciusEl.value = "";
    fahrenheitEl.value = "";
    kelvinEl.value = "";
}
