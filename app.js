/* Global Variables */
const zipInput = document.querySelector("#zip");
const feelInput = document.querySelector("#feelings");
const btn = document.querySelector("#generate");
const date = document.querySelector("#date");
const temp = document.querySelector("#temp");
const content = document.querySelector("#content");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// get weather by longt and litt data 5tot eltol we el3rd
const getWeather = function (latt, longt) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${longt}&appid=8e7d106695f8821e7a6da4304ae71e30`
  )
    .then((resolve) => {
      console.log(resolve);
      return resolve.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) =>
      console.error(
        `${err}, some thing went wrong!!! 💣💥,${err.message} Try Again`
      )
    );
};
getWeather(30.526630005797454, 31.005160409995455);
