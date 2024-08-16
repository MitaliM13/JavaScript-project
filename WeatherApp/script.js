document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const input = document.getElementById('text');
    const button = document.getElementById('btn');

    const createCardElement = (tagName, textContent, className = '') => {
        const element = document.createElement(tagName);
        element.textContent = textContent;

        if (className) {
            element.className = className;
        }

        return element;
    };

    const displayWeatherData = (city, data) => {
        container.innerHTML = '';
        
        const card = createCardElement('div', '', 'card');
        card.append(createCardElement('h2', `Name of the city: ${city}`));
        card.append(createCardElement('h3', `City Temperature: ${data.temperature}`));
        card.append(createCardElement('h3', `City Wind Speed: ${data.wind}`));

        const forecastTitle = createCardElement('h2', 'Daily Forecast');
        card.appendChild(forecastTitle);

        data.forecast.forEach((forecastData, index) => {
            const daily = createCardElement(
                'h3',
                `Climate on day ${index + 1}: Temp - ${forecastData.temperature}, Wind - ${forecastData.wind}`
            );
            card.append(daily);
        });

        container.append(card);
    };

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
            if (!response.ok) {
                throw new Error(`Network error: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            displayWeatherData(city, data);
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching data. Please try again later.');
        }
    };

    button.addEventListener('click', () => {
        const city = input.value.trim();
        if (!city) {
            alert('Please enter a city');
        } else {
            fetchWeatherData(city);
        }
    });
});
