     function convert() {
            let temp = parseFloat(document.getElementById("temperature").value);
            let unit = document.getElementById("unit").value;
            let result = document.getElementById("result");

            if (isNaN(temp)) {
                result.innerText = "Iltimos, haqiqiy son kiriting!";
                return;
            }

            if (unit === "celsius") {
                let fahrenheit = (temp * 9/5) + 32;
                result.innerText = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
            } else {
                let celsius = (temp - 32) * 5/9;
                result.innerText = `${temp}°F = ${celsius.toFixed(2)}°C`;
            }
        }