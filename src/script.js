function updateTime() {
  // Brisbane
  let brisbaneElement = document.querySelector("#city-brisbane");

  if (brisbaneElement) {
    let brisbaneDate = brisbaneElement.querySelector(".date");
    let brisbaneTime = brisbaneElement.querySelector(".time");

    brisbaneDate.innerHTML = moment().format("MMM Do, YYYY");
    brisbaneTime.innerHTML = moment()
      .tz("Australia/Brisbane")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
  // New York
  let newYorkElement = document.querySelector("#city-new-york");
  if (newYorkElement) {
    let newYorkDate = newYorkElement.querySelector(".date");
    let newYorkTime = newYorkElement.querySelector(".time");
    newYorkDate.innerHTML = moment().format("MMM Do, YYYY");
    newYorkTime.innerHTML = moment()
      .tz("America/New_York")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
  // Tokyo
  let tokyoElement = document.querySelector("#city-tokyo");
  if (tokyoElement) {
    let tokyoDate = tokyoElement.querySelector(".date");
    let tokyoTime = tokyoElement.querySelector(".time");
    tokyoDate.innerHTML = moment().format("MMM Do, YYYY");
    tokyoTime.innerHTML = moment()
      .tz("Asia/Tokyo")
      .format("HH:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="row" id="cities">
        <div class="col-6">
          <div class="city">${cityName}</div>
          <div class="time">${cityTime.format(
            "HH:mm:ss "
          )}<small>${cityTime.format("A")}</small>
          </div>
          <div class="date">${cityTime.format("MMM Do, YYYY")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-name-selector");
citiesSelectElement.addEventListener("change", updateCity);
