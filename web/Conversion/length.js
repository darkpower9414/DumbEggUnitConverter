document.getElementById("calculate").addEventListener("click", function () {
  const number = document.getElementById("number").value;

  const fromUnit = document.querySelector(
    'input[name="flexRadioDefault1"]:checked'
  ).id;
  const toUnit = document.querySelector(
    'input[name="flexRadioDefault2"]:checked'
  ).id;

  let result;

  if (fromUnit === "mm1" && toUnit === "cm2") {
    result = number / 10; // mm to cm
  } else if (fromUnit === "cm1" && toUnit === "mm2") {
    result = number * 10; // cm to mm
  } else if (fromUnit === "km1" && toUnit === "mm2") {
    result = number * 1000000; // km to mm
  } else if (fromUnit === "km1" && toUnit === "cm2") {
    result = number * 100000; // km to cm
  } else if (fromUnit === "cm1" && toUnit === "km2") {
    result = number / 100000; // cm to km
  } else if (fromUnit === "mm1" && toUnit === "km2") {
    result = number / 1000000; // mm to km
  } else {
    result = number;
  }

  document.getElementById("result").value = result;
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("number").value = "";

  document.getElementById("result").value = "";

  document.getElementById("mm1").checked = true;
  document.getElementById("mm2").checked = true;
});
