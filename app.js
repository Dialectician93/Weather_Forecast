const url = "https://api.openweathermap.org/data/2.5/";
const key = "8a0e2e03c568b9c9437a03d809a0e7b0";
const content = document.querySelector(".content")
const parag = document.querySelector(".parag")
const parag2 = document.querySelector(".parag2")

let g =new Date().getDate();
let a =new Date().getMonth()+1;
let y = new Date().getFullYear();

g = g < 10 ? "0" + g:g;
a = a < 10 ? "0" + a:a;

let fullDate =  (`${g}/${a}/${y}`)
parag.innerText = fullDate

function getTime(){
    let date = new Date();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  parag2.innerText = (`${hour}:${minute}:${second}`)
}
setInterval(function () {
    getTime();
  }, 1000);


const setQuery = (e) => {
  if (e.keyCode == "13") getResult(searchBar.value);
};

const getResult = (cityName) => {
  let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  searchBar.innerText = ""

  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);

};

const displayResult = (result) => {
  let city = document.querySelector(".city");
  city.innerText = `${result.name}, ${result.sys.country}`;
  let temp = document.querySelector(".temp");
  temp.innerText = `${Math.round(result.main.temp)}°C`;

  let desc = document.querySelector(".desc");
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector(".minmax");
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
    result.main.temp_max
  )}°C`;
};

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery)



