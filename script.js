document
  .getElementById("conversionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const integer = document.getElementById("integerInput").value;
    convertToRoman(integer);
  });

function convertToRoman(integer) {
  if (isNaN(integer) || integer < 1 || integer > 255) {
    document.getElementById("result").innerText =
      "Error: Please enter an integer between 1 and 255.";
  } else {
    const romanNumeral = integerToRoman(integer);
    document.getElementById(
      "result"
    ).innerText = `Roman Numeral for ${integer}: ${romanNumeral}`;
  }
}

function integerToRoman(num) {
  const romanNumerals = [
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    while (num >= romanNumerals[i].value) {
      roman += romanNumerals[i].symbol;
      num -= romanNumerals[i].value;
    }
  }

  return roman;
}
