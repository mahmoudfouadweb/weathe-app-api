/* Global Variables */
const feelInput = document.querySelector('#feelings');
const btn = document.querySelector('#generate');
const date = document.querySelector('#date');
const temp = document.querySelector('#temp');
const content = document.querySelector('#content');

// places names object
const places = [
  {
    name: 'mnofia',
    longt: 31.005160409995455,
    latt: 30.526630005797454,
  },
  {},
];

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

btn.addEventListener('click', e => {
  e.preventDefault();
  let input = document.querySelector('#zip');
  if (input.value == places[0].name) {
    getWeather(places[0].latt, places[0].longt);
  }
});

// display result
const displayUI = function (data) {
  console.log(data);
  date.textContent = 'date:- ' + newDate;
  temp.textContent = 'Temperature:- ' + data.main.temp;
  content.textContent = 'your feel:- ' + feelInput.value;
  document.querySelector('#feelLike').textContent =
    'feel like:- ' + data.main.feels_like;
  document.querySelector('#discription').textContent =
    'discription:- ' + data.main.temp < 24
      ? `it's cold tody!! ❄🤧`
      : `it's hot tody!! 🔥🥵`;
};
// get weather by longt and litt data 5tot eltol we el3rd
const getWeather = function (latt, longt) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${longt}&units=metric&appid=8e7d106695f8821e7a6da4304ae71e30`
  )
    .then(resolve => resolve.json())
    .then(data => displayUI(data))
    .catch(err =>
      console.error(
        `${err}, some thing went wrong!!! 💣💥,${err.message} Try Again`
      )
    );
};
