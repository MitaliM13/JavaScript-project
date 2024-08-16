document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container')
    const text = document.getElementById('text')
    const button = document.getElementById('btn')
    const data = document.querySelector('.data')

    const createCardElement = (tagName, textContent, className = '') => {
        const element = document.createElement(tagName)
        element.textContent = textContent

        if(className){
            element.className = className
        }

        return element
    }

    const displayWeatherData = (city, data) => {
        container.innerHTML = ''

        const card = createCardElement('card','','card')
        card.appendChild(createCardElement('h3',`Weather in ${city}`))
        card.appendChild(createCardElement('p',`Temperature is ${data.temperature}`))
        card.appendChild(createCardElement('h3',`Wind Speefd is ${data.wind}`))

        const forecasteTitle = document.createElement('h2', 'daily forecast')
        card.appendChild(forecasteTitle)

        data.forecast.forEach((day, index) => {
            const forecast = createCardElement('p', `Day ${index + 1} - Temperature: ${day.temperature}, Wind: ${day.wind}`);
            card.appendChild(forecast);
        });

        container.appendChild(card)
        container.style.height = 'auto'
        container.style.padding = '10px'
    }
})