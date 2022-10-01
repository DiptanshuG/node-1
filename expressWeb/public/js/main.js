const submitBtn = document.getElementById("submitbtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");

const getInfo = async (e) => {
  e.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = `please write the name before you search`;
    alert("please enter city name");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=3f3cbd06b73a900f034c5d70ee8f7cdb`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const arrData = [data];
      temp_status.innerText = arrData[0].weather[0].main;
      temp.innerText = arrData[0].main.temp;
      city_name.innerText =  `${arrData[0].name},${arrData[0].sys.country}`;

    } catch {
      city_name.innerText = `please enter city name properly`;
    }
  }
};

submitBtn.addEventListener("click", getInfo);
