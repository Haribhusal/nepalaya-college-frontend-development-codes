const NEW_API_KEY = "903584cd66e841b5b4443727262707"
const BASE_URL = 'http://api.weatherapi.com/v1'
let input = document.getElementById('input');
let btn = document.getElementById('submit-btn');
let display = document.getElementById('display')


btn.addEventListener('click', showWeather);

async function showWeather(){

  let city = input.value.trim();
  if(city == ''){
    window.alert('Please enter city')
  }

  let url = `${BASE_URL}/current.json?key=${NEW_API_KEY}&q=${city}`

  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error('City Not found');
    }
    const data = await response.json();
    console.log(data)


   display.innerHTML = `
    <h2>${data.location.name}, ${data.location.country}</h2>

    <img src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">

    <h1>${data.current.temp_c}°C</h1>

    <p><strong>${data.current.condition.text}</strong></p>

    <p>Feels Like: ${data.current.feelslike_c}°C</p>

    <p>Humidity: ${data.current.humidity}%</p>

    <p>Wind: ${data.current.wind_kph} km/h (${data.current.wind_dir})</p>

    <p>Pressure: ${data.current.pressure_mb} mb</p>

    <p>Cloud: ${data.current.cloud}%</p>

    <p>Chance of Rain: ${data.current.chance_of_rain}%</p>

    <p>Visibility: ${data.current.vis_km} km</p>

    <p>UV Index: ${data.current.uv}</p>

    <p>Last Updated: ${data.current.last_updated}</p>
`;


  } catch (error) {
    
  }


}