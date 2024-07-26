const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent from going result

  // creating 3 variable
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  // formula and conditions
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please Enter a valid Height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please Enter a valid Weight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show result
    result.innerHTML = `<span>BMI is ${bmi} </span>`;
  }
});
