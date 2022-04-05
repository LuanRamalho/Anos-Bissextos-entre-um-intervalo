//Initial References
let result = document.getElementById("result");
let btn = document.getElementById("get-leap-years");

//Get Leap years when the button is clicked
btn.addEventListener("click", () => {
  //Get values from the input fields
  //Number() converts string value to number
  let startYear = Number(document.getElementById("start-year").value);
  let endYear = Number(document.getElementById("end-year").value);

  //If both start and end year are invalid
  if (
    (startYear < 1582 || startYear > 2999) &&
    (endYear < 1582 || endYear > 2999)
  ) {
    result.innerHTML = `<b>O ano inicial e o ano final devem ser maiores que 1581 e menores que 3000.</b>`;
  }

  //If start year is greater than end year
  else if (startYear > endYear) {
    result.innerHTML = `<b>O ano final deve ser maior que o ano inicial.</b>`;
  }

  //If start year is invalid
  else if (startYear < 1582 || startYear > 2999) {
    result.innerHTML = `<b>O ano de inicio deve ser maior que 1581 e menor que 3000.</b>`;
  }

  //If end year is invalid
  else if (endYear < 1582 || endYear > 2999) {
    result.innerHTML = `<b>O ano final deve ser maior que 1581 e menor que 3000.</b>`;
  }

  //If both start and end years are valid
  else {
    //Empty array to store the leap years
    let leapYears = [];
    for (let i = startYear; i <= endYear; i++) {
      //Determine if a year is a leap year
      //If true push it into leapYears[]

      if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
        leapYears.push(i);
      }
    }
    //Display leap years in result div
    //toString() returns a string with comma seperated values
    //Use combo of split() and join() to replace ',' with ', '
    result.innerHTML = `<b>Ha ${
      leapYears.length
    } anos bissextos entre ${startYear} & ${endYear}.</b><span>${leapYears
      .toString()
      .split(",")
      .join(", ")}</span>`;
  }
});
