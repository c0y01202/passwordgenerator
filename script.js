// // Assignment code here
// var enter;
// var confirmLowercase;
// var confirmUppercase;
// var confirmNumber;
// var confirmSpecialCharacters;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//Alphabetical characters
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
];
//Numerical Values
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Special Characters
var specialCharacters = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// // To convert password value to upperCase
// var toUpper = function (x) {
//     return x.toUpperCase();
// };
// // creates a variable for uppercase conversion
// alpha2 = alpha.map(toUpper);

// var get = document.querySelector("#generate");

// get.addEventListener("click", function () {
//     ps = generatePassword();
//     document.getElementById("password").placeholder = ps;
// });

//List of questions for user to answer before generating password
function questions() {
  // Asks for user input
  var length = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  // First if statement for user validation
  if (!length) {
    alert("This needs a value");
  } else if (length < 8 || length > 128) {
    // Validates user input
    // Start user input prompts
    length = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // Continues once user input is validated
    var confirmLowercase = confirm(
      "Will this password contain lower case characters?"
    );
    var confirmUppercase = confirm(
      "Will this password contain upper case characters?"
    );
    var confirmNumber = confirm("Will this password contain numbers?");
    var confirmSpecialCharacters = confirm(
      "Will this password contain special characters?"
    );
  }
  if (
    !confirmSpecialCharacters &&
    !confirmNumber &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    alert("You must choose a criteria!");
    return null;
  }
  var passwordOptions = {
    pwdLength: length,
    pwdconfirmLowercase: confirmLowercase,
    pwdconfirmUppercase: confirmUppercase,
    pwdconfirmSpecialCharacters: confirmSpecialCharacters,
    pwdNumbers: confirmNumber,
  };
  return passwordOptions;
}

function getRandom(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];
  return randomElement;
}

// After consolidating answers to user questions the script then generates a password.
function generatePassword() {
  var passwordOptions = questions();
  console.log(passwordOptions);
  var possibleCombo = [];
  var finalPassword = "";
  var finalResult = [];
  var guaranteedCharacters = [];

  if (passwordOptions.pwdconfirmLowercase) {
    possibleCombo = possibleCombo.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }
  if (passwordOptions.pwdconfirmUppercase) {
    possibleCombo = possibleCombo.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }
  if (passwordOptions.pwdconfirmSpecialCharacters) {
    possibleCombo = possibleCombo.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (passwordOptions.pwdconfirmNumbers) {
    possibleCombo = possibleCombo.concat(number);
    guaranteedCharacters.push(getRandom(number));
  }
  for (var i = 0; i < passwordOptions.pwdLength; i++) {
    var possibleCharacter = getRandom(possibleCombo);
    finalResult.push(possibleCharacter);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    finalResult[i] = guaranteedCharacters[i];
  }
  return finalResult.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//added new lines based on office hours this may be redundant to lines 66-82
// if (options.hasNumbers) {
//   possibleCharacters =
//     possibleCharacters.concat(numbers);

//   guaranteedCharacters.push(getRandom(numbers));
// }

// if (options.hasLowerCase) {
//   possibleCharacters =
//     possibleCharacters = concat(LowerCaseCharacters);

//   guaranteedCharacters.push(getRandom(LowerCaseCharacters));
// }

// if (options.hasUpperCase) {
//   possibleCharacters =
//     possibleCharacters = concat(UpperCaseCharacters);

//   guaranteedCharacters.push(getRandom(UpperCaseCharacters));
// }

// if (options.hasSpecial) {
//   possibleCharacters =
//     possibleCharacters = concat(special);

//   guaranteedCharacters.push(getRandom(special));
// }
// console.log(possibleCombo);

// turn this into a function
var randomPassword = function () {
  var value = document.querySelector("#generate");
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    finalPassword +=
      possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
  }
  console.log(finalPassword);

  return finalPassword;
};

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
