function confirm() {
  checkName();
  checkNum();
  checkMonth();
  checkYear();
  checkCvc();
  Achieve();
}

function checkName() {
  let myNameInput = document.getElementById("lengthName");
  let myNameError = document.getElementById("errorName");
  let myNameRegex = /^[a-zA-Z-\s]+$/;

  if (myNameInput.value.trim() == "") {
    myNameError.innerHTML = "Can't be blank";
  } else if (myNameRegex.test(myNameInput.value) == false) {
    myNameError.innerHTML = "Can't contain numbers or symbols";
  } else {
    myNameError.innerHTML = "";
  }
}

function checkNum() {
  let myNumInput = document.getElementById("lengthNum");
  let myNumError = document.getElementById("errorNum");
  let myNumRegex = /^[0-9\s]+$/;

  if (myNumInput.value.trim() == "") {
    myNumError.innerHTML = "Can't be blank";
  } else if (myNumRegex.test(myNumInput.value) == false) {
    myNumError.innerHTML = "Must contain number";
  } else if (myNumInput.value.trim().length !== 19) {
    myNumError.innerHTML = "Invalid Card Number, must contain space";
  } else {
    myNumError.innerHTML = "";
  }
}

function checkMonth() {
  let myMonthInput = document.getElementById("lengthMonth");
  let myDateError = document.getElementById("errorDate");
  let myNumRegex = /^[0-9]+$/;

  if (myMonthInput.value.trim() == "") {
    myDateError.innerHTML = "Can't be blank";
  } else if (myNumRegex.test(myMonthInput.value) == false) {
    myDateError.innerHTML = "Invalid month";
  } else if (myMonthInput.value.trim().length !== 2) {
    myDateError.innerHTML = "Invalid Date";
  } else {
    myDateError.innerHTML = "";
  }
}
function checkYear() {
  let myYearInput = document.getElementById("lengthYear");
  let myDateError = document.getElementById("errorDate");
  let myNumRegex = /^[0-9]+$/;

  if (myYearInput.value.trim() == "") {
    myDateError.innerHTML = "Can't be blank";
  } else if (myNumRegex.test(myYearInput.value) == false) {
    myDateError.innerHTML = "Invalid month";
  } else if (myYearInput.value.trim().length !== 2) {
    myDateError.innerHTML = "Invalid Date";
  } else {
    myDateError.innerHTML = "";
  }
}
function checkCvc() {
  let myCvcInput = document.getElementById("lengthCvc");
  let myCvcError = document.getElementById("errorCvc");
  let myNumRegex = /^[0-9]+$/;

  if (myCvcInput.value.trim() == "") {
    myCvcError.innerHTML = "Can't be blank";
  } else if (myNumRegex.test(myCvcInput.value) == false) {
    myCvcError.innerHTML = "Invalid CVC";
  } else if (myCvcInput.value.trim().length !== 3) {
    myCvcError.innerHTML = "Invalid CVC";
  } else {
    myCvcError.innerHTML = "";
  }
}

function Achieve() {
  let myCvcInput = document.getElementById("lengthCvc");
  let myYearInput = document.getElementById("lengthYear");
  let myMonthInput = document.getElementById("lengthMonth");
  let myNumInput = document.getElementById("lengthNum");
  let myNameInput = document.getElementById("lengthName");
  let myNameRegex = /^[a-zA-Z-\s]+$/;
  let myNumRegex = /^[0-9\s]+$/;

  if (
    myCvcInput.value.trim().length === 3 &&
    myNumRegex.test(myCvcInput.value) == true &&
    myMonthInput.value.trim().length === 2 &&
    myNumRegex.test(myMonthInput.value) === true &&
    myYearInput.value.trim().length === 2 &&
    myNumRegex.test(myYearInput.value) === true &&
    myNumInput.value.trim().length === 19 &&
    myNumRegex.test(myNumInput.value) === true &&
    myNameInput.value !== "" &&
    myNameRegex.test(myNameInput.value) === true
  ) {
    let getForm = document.getElementById("formulaire");
    let formComplete = document.getElementById("achieve");

    getForm.style.display = "none";
    formComplete.style.display = "flex";
  }
}
