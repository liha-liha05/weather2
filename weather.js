const apiKey = "fab0eef09579484e95165445262207";

function getWeather() {

    const city = document.getElementById("city").value;

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
        .then(response => response.json())
        .then(data => {

            if (data.error) {
                document.getElementById("weather").innerHTML =
                    "<h3>City Not Found</h3>";
                return;
            }

            document.getElementById("weather").innerHTML = `
                <h2>${data.location.name}</h2>

                <img src="https:${data.current.condition.icon}" alt="Weather Icon">

                <h3>${data.current.temp_c} °C</h3>

                <p><b>Weather:</b> ${data.current.condition.text}</p>

                <p><b>Humidity:</b> ${data.current.humidity}%</p>

                <p><b>Wind Speed:</b> ${data.current.wind_kph} km/h</p>
            `;

        })
        .catch(error => {
            console.log(error);
        });

}