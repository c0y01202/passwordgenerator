// Assignment code here
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmSpecialCharacters;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Alphabetical characters
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"]
//Numerical Values
var Number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Special Characters
var SpecialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var choices;
// To convert password value to upperCase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


//List of questions for user to answer before generating password
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for user validation 
  if (!enter) {
      alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
      // Validates user input
      // Start user input prompts
      enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
      // Continues once user input is validated
      confirmNumber = confirm("Will this password contain numbers?");
      confirmCharacter = confirm("Will this password contain special characters?");
      confirmUppercase = confirm("Will this password contain Uppercase letters?");
      confirmLowercase = confirm("Will this password contain Lowercase letters?");
  };
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");

}

// After consolidating answers to user questions the script then generates a password.
function generatePassword() {
  var passwordOptions = questions();
  var possibleCombo = [];
  var finalPassword = "";


  if (passwordOptions.askNumbers) {
    for (var i of numbers)
      possibleCombo.push(i);
  }
  if (passwordOptions.askLowerCase) {
    for (var i of lowerCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askUpperCase) {
    for (var i of upperCase)
      possibleCombo.push(i);
  }
  if (passwordOptions.askSpecial) {
    for (var i of special)
      possibleCombo.push(i);
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  //added new lines based on office hours
  if (options.hasNumbers) {
    possibleCharacters = 
    possibleCharacters.concat(numbers);

    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.hasLowerCase) {
    possibleCharacters = 
    possibleCharacters = concat(LowerCaseCharacters);

    guaranteedCharacters.push(getRandom(LowerCaseCharacters));
  }

  if (options.hasUpperCase) {
    possibleCharacters = 
    possibleCharacters = concat(UpperCaseCharacters);

    guaranteedCharacters.push(getRandom(UpperCaseCharacters));
  }

  if (options.hasSpecial) {
    possibleCharacters = 
    possibleCharacters = concat(special);

    guaranteedCharacters.push(getRandom(special));
  }
  console.log(possibleCombo);

// turn this into a function
var randomPassword = function() {
var value = document.querySelector("#generate")
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

  for (var i = 0; i <passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  console.log(finalPassword);

  return finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
