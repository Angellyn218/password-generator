// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generate password
function generatePassword() {
  var num = checkNumCharacters();
  var usable = charactersToAdd();
  return;
};

// Check number of characters
function checkNumCharacters() {
  var num = prompt("Please the number of characters that you want (8-128 character required)");
  if ((num >= 8) && (num <= 128)) {
    alert("Great! You want a password with " + num + " characters.");
    return num;
  } else if (num < 8) {
    alert("Not enough characters. Try again.");
    return;
  } else if (num > 128) {
    alert("Too many characters. Try again.");
    return;
  } else {
    alert ("Not a number. Try again.")
    return;
  }
}

// Check what types of characters to add
function charactersToAdd() {
  var usable = [];
  var lower = confirm("Do you want to add LOWERCASE LETTERS to your password?");
  var upper = confirm("Do you want to add UPPERCASE LETTERS to your password?");
  var number = confirm("Do you want to add NUMERIC CHARACTERS to your password?");
  var spec = confirm("Do you want to add SPECIAL CHARACTERS to your password?");
}

// Creates password from lists





