function updateTime() {
  // Brisbane
  let brisbaneElement = document.querySelector("#city-brisbane");
  let brisbaneDate = brisbaneElement.querySelector(".date");
  let brisbaneTime = brisbaneElement.querySelector(".time");

  brisbaneDate.innerHTML = moment().format("MMM Do, YYYY");
  brisbaneTime.innerHTML = moment()
    .tz("Australia/Brisbane")
    .format("HH:mm:ss [<small>]A[</small>]");

  // New York
  let newYorkElement = document.querySelector("#city-new-york");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");
  newYorkDate.innerHTML = moment().format("MMM Do, YYYY");
  newYorkTime.innerHTML = moment()
    .tz("America/New_York")
    .format("HH:mm:ss [<small>]A[</small>]");

  // Tokyo
  let tokyoElement = document.querySelector("#city-tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  tokyoDate.innerHTML = moment().format("MMM Do, YYYY");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("HH:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
