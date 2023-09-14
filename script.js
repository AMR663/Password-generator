// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

function generatePassword() {
  var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var passwordLength = 0;
  var possibleCharacters = [];
  var newPassword = "";

  if (confirm("Include lowercase characters?")) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (confirm("Include uppercase characters?")) {
    possibleCharacters = possibleCharacters.concat(upppercaseCharacters);
  }
  if (confirm("Include special characters?")) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }
  if (confirm("Include numbers?")) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }

  console.log(possibleCharacters);

  while ((passwordLength <= 0) || (passwordLength > 128)) {
    var length = prompt("Enter password length (1-128)");
    if (isNaN(length)) {
      passwordLength = 0;
    }
    else {
      passwordLength = parseInt(length);
    }
  }

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharacters.length);
    newPassword += possibleCharacters[randomNumber];
  }

  return newPassword;
}