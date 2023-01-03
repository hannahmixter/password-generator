const wordLength = 8;
const choiceArray = [];
const uppercaseCodes = lowToHighArray(65, 90);
const lowercaseCodes = lowToHighArray(97, 122);
const numberCodes = lowToHighArray(48, 57);
const specialCharCodes = lowToHighArray(33, 47).concat(
  lowToHighArray(58, 64)
).concat(
  lowToHighArray(91, 96)
).concat(
  lowToHighArray(123, 126)
);

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function lowToHighArray(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
