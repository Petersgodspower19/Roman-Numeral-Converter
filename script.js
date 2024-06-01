let result = document.getElementById("result");
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
   let inputField = document.getElementById("number");
    let num = inputField.value;

    if ((num < 1) || (num > 3999)) {
        result.style.display = "block";
        result.classList.add("errors");
        result.textContent = "Please enter a valid number";
        return;
    } 

   const romanNumerals = [
    {value: 1000, numeral: "M"},
    {value: 900, numeral: "CM"},
    {value: 500, numeral: "D"},
    {value: 400, numeral: "CD"},
    {value: 100, numeral: "C"},
    {value: 90, numeral: "XC"},
    {value: 50, numeral: "L"},
    {value: 40, numeral: "XL"},
    {value: 10, numeral: "X"},
    {value: 9,  numeral: "IX"},
    {value: 5, numeral: "V"},
    {value: 4, numeral: "IV"},
    {value: 1, numeral: "I"}
   ];

   let roman = "";
   let number = parseInt(num, 10);

   for (const {value, numeral} of romanNumerals) {
      while (number >= value) {
        roman += numeral;
        number -= value;
      }
   }
   result.style.display = "block";
   result.textContent = `${roman}`;
   num = "";
});
