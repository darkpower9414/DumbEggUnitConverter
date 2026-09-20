document.getElementById("calculate").addEventListener("click", function () {
  const number = document.getElementById("number").value;

  const fromUnit = document.querySelector(
    'input[name="flexRadioDefault1"]:checked'
  ).id;
  const toUnit = document.querySelector(
    'input[name="flexRadioDefault2"]:checked'
  ).id;

  let result;

  if (fromUnit === "mg1" && toUnit === "g2") {
    result = number / 1000; // mg to g
  } else if (fromUnit === "g1" && toUnit === "mg2") {
    result = number * 1000; // g to mg
  } else if (fromUnit === "kg1" && toUnit === "mg2") {
    result = number * 100000000; // kg to mg
  } else if (fromUnit === "kg1" && toUnit === "g2") {
    result = number * 1000; // kg to cg
  } else if (fromUnit === "g1" && toUnit === "kg2") {
    result = number / 1000; // cg to kg
  } else if (fromUnit === "mg1" && toUnit === "kg2") {
    result = number / 100000000; // mg to kg
  } else {
    result = number;
  }

  document.getElementById("result").value = result;
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("number").value = "";

  document.getElementById("result").value = "";

  document.getElementById("mg1").checked = true;
  document.getElementById("mg2").checked = true;
});
