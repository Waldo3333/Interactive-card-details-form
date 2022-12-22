const keyName = document.querySelector(".nom");
var contenuName = document.getElementById("name-text");
const keyNum = document.querySelector(".num");
var contenuNum = document.getElementById("num-text");
const keyMonth = document.querySelector(".month");
var contenuMonth = document.getElementById("month-text");
const keyYear = document.querySelector(".year");
var contenuYear = document.getElementById("year-text");
const keyCvc = document.querySelector(".cvcInput");
var contenuCvc = document.getElementById("cvc-text");
var errorDate = document.getElementById("errorDate");
var errorCvc = document.getElementById("errorCvc");
var errorNum = document.getElementById("errorNum");
var errorName = document.getElementById("errorName");
var lengthName = document.getElementById("lengthName");
var lengthNum = document.getElementById("lengthNum");
var lengthMonth = document.getElementById("lengthMonth");
var lengthYear = document.getElementById("lengthYear");
var lengthCvc = document.getElementById("lengthCvc");

keyName.addEventListener("keyup", e => {
  console.log(lengthName.value.length);
  contenuName.innerHTML = e.target.value;
  if (contenuName.innerHTML.length === 0) {
    contenuName.innerHTML = "John Do";
  }
});

keyNum.addEventListener("keyup", e => {
  console.log(lengthNum.value.length);
  contenuNum.innerHTML = e.target.value;
  if (contenuNum.innerHTML.length === 0) {
    contenuNum.innerHTML = "0000 0000 0000 0000";
  }
});
keyMonth.addEventListener("keyup", e => {
  contenuMonth.innerHTML = e.target.value;

  if (parseInt(contenuMonth.innerHTML) > 12) {
    errorDate.innerHTML = "Invalid Date";
  }

  if (parseInt(contenuMonth.innerHTML) < 12) {
    errorDate.innerHTML = "";
  }
  if (contenuMonth.innerHTML.length === 0) {
    contenuMonth.innerHTML = "00";
  }
});

keyYear.addEventListener("keyup", e => {
  contenuYear.innerHTML = e.target.value;
  if (contenuYear.innerHTML.length === 0) {
    contenuYear.innerHTML = "00";
  }
});
keyCvc.addEventListener("keyup", e => {
  contenuCvc.innerHTML = e.target.value;

  if (contenuCvc.innerHTML.length === 0) {
    contenuCvc.innerHTML = "000";
  }
});
