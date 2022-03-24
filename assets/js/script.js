// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// 1. create variables to save user input from prompts

//alert, confirm, prompt

//
const uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];

// 2. Create arrays for each type of character.
//specialCharacters, upperCase, lowerCase, numeric

function generatePassword() {
  var special;
  var lowercase;
  var uppercase;
  var number;
  var passlength;

  passlength = prompt("please enter a password with a length between 8 and 128");

  passlength = parseInt(passlength);
  // use conditionals to validate input (password length, user enters no input)
  while (passlength > 128 || passlength < 8) {
    passlength = prompt("password must be between 8 and 128 characters");

    //PasswordLength string (turn into numerical data)
    passlength = parseInt(passlength);
  }

  //specialCharacters boolean
  special = confirm("would you like to use special characters?")

  //numericCharacters boolean
  number = confirm("would you like to use numbered characters?")

  //lowercaseCharacters boolean
  lowercase = confirm("would you like to use lowercase characters?")

  //uppercaseCharacters boolean
  uppercase = confirm("would you like to use uppercase characters?")

// 3. use randomizer function to select characters from each array.
// 4.generatePassword function -- take user input and pull values at random from arrays.

// 5. create an empty array that represents the final password.

// 6. join the character arras together based on user input.

// 7. randomized characters from joined arrays

// 8. Transforming the array into a string

var password = "";
while (password.length < passlength) {

  if (uppercase) {
    password += uppers[Math.floor(Math.random() * uppers.length)];
    if (password.length === passlength) { break }
  }
  if (lowercase) {
    password += lowers[Math.floor(Math.random() * lowers.length)];
    if (password.length === passlength) { break }
  }
  if (number) {
    password += numbers[Math.floor(Math.random() * numbers.length)];
    if (password.length === passlength) { break }
  }
  if (special) {
    password += specials[Math.floor(Math.random() * specials.length)];
    if (password.length === passlength) { break }
  }
}
return password;

}
