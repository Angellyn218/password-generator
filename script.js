// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// Check what types of characters to add
function charactersToAdd() {
  var num = prompt("Please the number of characters that you want (8-128 character required)");
  if ((num >= 8) && (num <= 128)) {
    alert("Great! You want a password with " + num + " characters.");
  } else if (num < 8) {
    alert("Not enough characters. Try again.");
    return null;
  } else if (num > 128) {
    alert("Too many characters. Try again.");
    return null;
  } else {
    alert ("Not a number. Try again.")
    return null;
  }

  var lower = false;
  var upper = false;
  var numeric = false;
  var special = false; 

  while (!lower && !upper && !numeric && !special) {
    lower = confirm("Do you want to add LOWERCASE LETTERS to your password?");
    upper = confirm("Do you want to add UPPERCASE LETTERS to your password?");
    numeric = confirm("Do you want to add NUMERIC CHARACTERS to your password?");
    special = confirm("Do you want to add SPECIAL CHARACTERS to your password?");

    if (!lower && !upper && !numeric && !special) {
      alert("No characters chosen. Try again.");
    }
  }

  var passwordAnswers = {
    num: num,
    lower: lower,
    upper: upper,
    number: numeric,
    spec: special,
  }

  return passwordAnswers;

}

// function that randomly generates elements from a given array
function generateRandomElement(array) {
  var random = Math.floor(Math.random() * array.length);

  return array[random];
}

// store and join elements into string (join, concat, push)
// Generate password
function generatePassword() {
  var userInput = charactersToAdd();
  for (var i = 0; i < userInput.num; i++) {
    // Add code here
  }
  return;
};

// Given:
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
