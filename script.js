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
var special;
var lowercase;
var uppercase;
var number;
var passlength;

passlength = prompt("please enter a password with a length between 8 and 128");

passlength=parseInt(passlength);

while(passlength >128 || passlength <8 ){
  passlength = prompt("password must be between 8 and 128 characters");

  passlength=parseInt(passlength);
}


//PasswordLength string (turn into numerical data)
//specialCharacters boolean
//numericCharacters boolean
//lowercaseCharacters boolean
lowercase=confirm("")

//uppercaseCharacters boolean
  //alert, confirm, prompt
  // use conditionals to validate input (password length, user enters no input)
  //
  const uppers = ['A', 'B', 'C', 'D','E', 'F', 'G', 'H','I', 'J', 'K', 'L','M', 'N', 'O', 'P','Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
  const lowers = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h','i', 'j', 'k', 'l','m', 'n', 'o', 'p','q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const specials = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}','~'];
// 2. Create arrays for each type of character.
  //specialCharacters, upperCase, lowerCase, numeric

// 3. use randomizer function to select characters from each array.


// 4.generatePassword function -- take user input and pull values at random from arrays.

// 5. create an empty array that represents the final password.

// 6. join the character arras together based on user input.

// 7. randomized characters from joined arrays

// 8. Transforming the array into a string
