"use strict";
// Selecting elements
const btnDateTime = document.getElementById("dateTime");
const btnTemp = document.getElementById("temperature");
const btnCalc = document.getElementById("calc");
const btnStringChanger = document.getElementById("string");
const btnColor = document.getElementById("btnColor");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const tasks = document.getElementById("tasks");
//--------------------------------------------------------------------

// Open and close popUp functions:
const showPopUp = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closePopup = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
//--------------------------------------------------------------------
// Adding event of pressing Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closePopup();
    document.querySelector(".converter").classList.add("hidden");
    celsInput.value = "";
    document.getElementById("converted").textContent = "";
    document.querySelector(".stringDeleter").classList.add("hidden");
    document.getElementById("tasks").textContent = "";
  }
});
overlay.addEventListener("click", function () {
  closePopup();
  document.querySelector(".converter").classList.add("hidden");
  celsInput.value = "";
  document.getElementById("converted").textContent = "";
  document.querySelector(".stringDeleter").classList.add("hidden");
  document.getElementById("tasks").textContent = "";
});
//--------------------------------------------------------------------

//Date and time button
//TASK: Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38
btnDateTime.addEventListener("click", function () {
  showPopUp();
  //Getting the weekday
  let time = new Date();
  let options = { weekday: "long" };
  let weekday = new Intl.DateTimeFormat("en-US", options).format(time);

  let hours = time.toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric",
  });

  //Getting the time

  document.getElementById("popText").textContent = `Today is: ${weekday}`;
  document.getElementById("tasks").textContent = `Time: ${hours}`;
});
//const value = moment('2014-08-20 15:30:00').format('MM/DD/YYYY h:mm a')
//-------------------------------------------------------------------

//Sum calculator:
btnCalc.addEventListener("click", function () {
  showPopUp();

  let a = Number(prompt("Please, enter the first value"));
  console.log(typeof a);
  let b = Number(prompt("Please, enter the second value"));
  console.log(typeof b);
  let calcSum = function (a, b) {
    return a === b ? (a + b) * 3 : a + b;
  };
  let result = calcSum(a, b);
  document.getElementById("popText").textContent = "Your result is:";
  document.getElementById("tasks").textContent = result;
  // document.querySelector("h2").style.textAlign = "center";
});
//---------------------------------------------------------------

//Button color change:
btnColor.addEventListener("click", function () {
  btnColor.classList.toggle("red-back");
  // document.getElementById("gif").classList.toggle("hidden");
});
//---------------------------------------------------------------

//Temeprature converter
// const btnConvert = document.getElementById("btnConvert");

const btnConvert = document.getElementById("btnConvert");
const btnSwitch = document.getElementById("btnSwitch");
const celsInput = document.getElementById("celsInput");

//Adding on click event to "Temperaturle converter" button NOTE: GET ESCAPE TO CLOSE THIS ONE ASWELL
btnTemp.addEventListener("click", function () {
  document.querySelector(".converter").classList.remove("hidden");
  overlay.classList.remove("hidden");
});
//0 for celsius -> fahrenheit; 1 for fahrenheit -> celsius
let degreeSwitch = 0;

//calculation function(s). Conversion
// celsius to fahrenheit
const convert0 = function (celsius) {
  let result = (Number(celsius) * 9) / 5 + 32;
  return result;
};
//fahren to celsius
const convert1 = function (fahrenheit) {
  let result = ((Number(fahrenheit) - 32) * 5) / 9;
  return result;
};

const celsString = document.getElementById("celsDegrees");
const fahrString = document.getElementById("fahrDegrees");

btnSwitch.addEventListener("click", function () {
  degreeSwitch = degreeSwitch === 0 ? 1 : 0;
  console.log(degreeSwitch);
  if (degreeSwitch === 0) {
    celsString.textContent = "Celsius degrees:";
    fahrString.textContent = "Fahrenheit degrees:";
  } else {
    celsString.textContent = "Fahrenheit degrees:";
    fahrString.textContent = "Celsius degrees:";
  }
  celsInput.value = "";
  document.getElementById("converted").textContent = "";
});

btnConvert.addEventListener("click", function () {
  let result = 0;
  if (degreeSwitch === 0) {
    result = convert0(celsInput.value);
  } else {
    result = convert1(celsInput.value);
  }

  document.getElementById("converted").textContent = result.toFixed(2);
});
//--------------------------------------------------------------
//TASK: remove a character at the specified position of a given string and return the new string
//Selecting stuff
const inputStr = document.getElementById("inputPhrase");
const indexDel = document.getElementById("indexDelete");
const deleteBTN = document.getElementById("applyDeletion");
const outputStr = document.getElementById("delOutput");

deleteBTN.addEventListener("click", function () {
  let str = inputStr.value;
  console.log(str);
  const delIndex = Number(indexDel.value);
  console.log(delIndex);
  let result = str.slice(0, delIndex) + "_" + str.slice(delIndex + 1);
  console.log(result);
  outputStr.textContent = result;
});
btnStringChanger.addEventListener("click", function () {
  document.querySelector(".stringDeleter").classList.remove("hidden");
  overlay.classList.remove("hidden");
  inputStr.value = "";
  indexDel.value = "";
  outputStr.textContent = "";
});
