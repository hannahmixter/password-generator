function lowToHighArray(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  const correctPrompts = getPrompts();
  const passwordText = document.querySelector("#password");
  
  if(correctPrompts) {
    const newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }



function generatePassword() {
  const password = "";
  for(var i = 0; i < wordLength; i++) {
    var randomChar = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomChar];
  }
  return password;
}

function getPrompts() {
  choiceArray = [];
  wordLength = parseInt(prompt("Choose a password length between 8 and 128 characters"));
  if(isNaN(wordLength) || wordLength < 8 || wordLength > 128) {
    alert("Password length must be a number (8-128). Please try again");
    return false;
  }

  if (confirm("Include lowercase letters?")) {
    choiceArray = choiceArray.concat(lowercaseCodes);
  }
  if (confirm("Include uppercase letters?")) {
    choiceArray = choiceArray.concat(uppercaseCodes);
  }
  if (confirm("Include numbers?")) {
    choiceArray = choiceArray.concat(numberCodes);
  }
  if (confirm("Include special characters?")) {
    choiceArray = choiceArray.concat(specialCharCodes);
  }
  return true;
}