const currentTemp = document.querySelector('#current-temp');
const weatherDesc = document.querySelector('#weather-desc');
const forecastContainer = document.querySelector('#forecast');

const lat = -30.0346;
const lon = -51.2177;
const apiKey = 'f9b494f2b0aa86143febdd16652b9487'; 

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            currentTemp.innerHTML = `${Math.round(data.main.temp)}`;
            weatherDesc.innerHTML = data.weather[0].description;
        }

        const fResponse = await fetch(forecastUrl);
        if (fResponse.ok) {
            const fData = await fResponse.json();
            const dailyForecast = fData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
            
            dailyForecast.forEach(day => {
                const date = new Date(day.dt_txt).toLocaleDateString('en-US', {weekday: 'short'});
                forecastContainer.innerHTML += `<p>${date}: ${Math.round(day.main.temp)}°C</p>`;
            });
        }
    } catch (error) {
        console.log(error);
    }
}

const spotlightArea = document.querySelector('#spotlight-cards');
const membersUrl = "data/members.json";

async function getSpotlights() {
    const response = await fetch(membersUrl);
    const members = await response.json();

    const eligible = members.filter(m => m.level === 3 || m.level === 2);
    
    const shuffled = eligible.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    selected.forEach(member => {
        let card = document.createElement("div");
        card.className = "spotlight-card";
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name} logo">
            <h4>${member.name}</h4>
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <p><a href="${member.website}">${member.website}</a></p>
            <p class="membership-tag">${member.level === 3 ? 'Gold' : 'Silver'} Member</p>
        `;
        spotlightArea.appendChild(card);
    });
}

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;
apiFetch();
getSpotlights();

const menuButton = document.querySelector('#menu-button');
const navList = document.querySelector('#nav-list');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('show');
    
    if (navList.classList.contains('show')) {
        menuButton.textContent = 'X';
    } else {
        menuButton.textContent = '☰';
    }
});