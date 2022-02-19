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

//List of questions for user to answer before generating password
function questions() {
  var isValid = false;
  do {
    var length = prompt("Choose password length between 8 and 128 characters");
    var askNumbers = confirm("Do you want your password to include numbers?");
    var askLowerCase = confirm("Do you want your password to include lower case letters?");
    var askUpperCase = confirm("Do you want your password to include upper case letters?");
    var askSpecial = confirm("Do you want your password to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Must choose at least one type.");
    else
    isValid = true;

  } while(!isValid);
  return responses;
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

// turn line 73 into a function
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
