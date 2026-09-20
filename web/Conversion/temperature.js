document.getElementById("calculate").addEventListener("click", function () {
  const number = document.getElementById("number").value;

  const fromUnit = document.querySelector(
    'input[name="flexRadioDefault1"]:checked'
  ).id;
  const toUnit = document.querySelector(
    'input[name="flexRadioDefault2"]:checked'
  ).id;

  let result;

  if (fromUnit === "C1" && toUnit === "F2") {
    result = (number * 9) / 5; // C to F
  } else if (fromUnit === "F1" && toUnit === "C2") {
    result = ((number - 32) * 5) / 9; // F to C
  } else {
    result = number;
  }

  document.getElementById("result").value = result;
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("number").value = "";

  document.getElementById("result").value = "";

  document.getElementById("C1").checked = true;
  document.getElementById("C2").checked = true;
});
