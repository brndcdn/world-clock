function updateTime() {
  //Bogota
  let bogotaElement = document.querySelector("#bogota");
  let bogotaDateElement = bogotaElement.querySelector(".date");
  let bogotaTimeElement = bogotaElement.querySelector(".time");
  let bogotaTimezone = moment().tz("America/Bogota");

  bogotaDateElement.innerHTML = bogotaTimezone.format("MMMM Do YYYY");
  bogotaTimeElement.innerHTML = bogotaTimezone.format(
    "hh:mm:ss [<small>]A[</small>]",
  );

  //Rome
  let romeElement = document.querySelector("#rome");
  let romeDateElement = romeElement.querySelector(".date");
  let romeTimeElement = romeElement.querySelector(".time");
  let romeTimezone = moment().tz("Europe/Rome");

  romeDateElement.innerHTML = romeTimezone.format("MMMM Do YYYY");
  romeTimeElement.innerHTML = romeTimezone.format(
    "hh:mm:ss [<small>]A[</small>]",
  );
}

updateTime();
setInterval(updateTime, 1000);
