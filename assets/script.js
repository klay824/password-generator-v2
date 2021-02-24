// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

var testString = "An actual sentence"
var words = testString.length

// Array of special characters to be included in password
var specialCharacters = "~`!@#$%^&*()-_=+':;?/.>,<";
var specialArr = specialCharacters.split("")
// console.log(specialArr)
// Array of numeric characters to be included in password
var numericCharacters =["0", "1", "2", "3", "4", "5" ,"6","7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var lowerArr = lowerCaseCharacters.split("")

// Array of uppercase characters to be included in password
// var upperCaseCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var upperArr = lowerCaseCharacters.toUpperCase().split("")
// console.log(lowerArr)
// console.log(upperArr)
// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var passLength = (prompt('How many characters long would you like your password to be?'));

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (isNaN(passLength) === true) {
    alert('Password length must be provided as a number');
    return;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  while (passLength <8 || passLength >128) {
    alert('Your password must be at least 8 characters but no longer than 128.');
    var passLength = (prompt('How many characters long would you like your password to be?'));
  }

  alert('Your password will be ' + passLength + ' characters long.');

  // Variable to store boolean regarding the inclusion of special characters
  var specialCharactersConfirm = (confirm('Would you like to include special characters in your password? OK for yes; Cancel for no.'));

  // Variable to store boolean regarding the inclusion of numeric characters
  var numericCharactersConfirm = (confirm('Would you like to include numeric characters in your password? OK for yes; Cancel for no.'));

  // Variable to store boolean regarding the inclusion of lowercase characters
  var lowerCaseCharactersConfirm = (confirm('Would you like to include lowercase letters in your password? OK for yes; Cancel for no.'));

  // Variable to store boolean regarding the inclusion of uppercase characters
  var upperCaseCharactersConfirm = (confirm('Would you like to include uppercase letters in your password? OK for yes; Cancel for no.'));

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (specialCharactersConfirm === false && numericCharactersConfirm === false && lowerCaseCharactersConfirm === false && upperCaseCharactersConfirm === false) {
    alert('You must select at least one of the following: Special Character, Numeric Character, Lowercase Letter, or Uppercase Letter.');
    var specialCharactersConfirm = (confirm('Would you like to include special characters in your password? OK for yes; Cancel for no.'));
    var numericCharactersConfirm = (confirm('Would you like to include numeric characters in your password? OK for yes; Cancel for no.'));
    var lowerCaseCharactersConfirm = (confirm('Would you like to include lowercase letters in your password? OK for yes; Cancel for no.'));
    var upperCaseCharactersConfirm = (confirm('Would you like to include uppercase letters in your password? OK for yes; Cancel for no.'));
    return;
  }
  // Object to store user input variables
  var passwordOptions = {
    passLength,
    specialCharactersConfirm,
    numericCharactersConfirm,
    lowerCaseCharactersConfirm,
    upperCaseCharactersConfirm
  };
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandomElement(arr) {
  // Get a random number based on the length of the array parameter
  var randIndex = Math.floor(Math.random() * arr.length);
  // Use the random number made to get an element out of the array
  var randElement = arr[randIndex];
  // Return the element
  return randElement;
}

// Function to generate password with user input
function generatePassword() {
  // Running the function to trigger the prompts and get the users answers back as an object
  var options = getPasswordOptions();

  // Array to store password as it's being concatenated 
  var result = [];

  // Array to store types of characters to include in password
  // var possibleCharacters = [specialCharacters, numericCharacters, lowerCaseCharacters, upperCaseCharacters];
  if(options.specialCharactersConfirm === true){
    result = result.concat(specialArr)
  }
  if(options.numericCharactersConfirm === true) {
    result = result.concat(numericCharacters)
  }
  
  //Work-in-Progress

  console.log(result)
  // Array to contain one of each type of chosen character to ensure each will be used
  // var guaranteedCharacters = options;

  // Conditional statement that adds array of special characters into array of possible characters based on user input
  // Push new random special character to guaranteedCharacters to make at least one of the value is always included 
  // if (options.push) {
  //   specialCharactersConfirm;
  //   return guaranteedCharacters + possibleCharacters;
  // }

  // Conditional statement that adds array of numeric characters into array of possible characters based on user input
  // Push new random numeric character to guaranteedCharacters to make at least one of the value is always included 
  // if (options.push) {
  //   options.push(numericCharactersConfirm);
  //   return guaranteedCharacters + possibleCharacters;
  // }

  // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
  // Push new random lower-cased character to guaranteedCharacters to make at least one of the value is always included 
  // if (options.push) {
  //   options.push(lowerCaseCharactersConfirm);
  //   return guaranteedCharacters + possibleCharacters;
  // }

  // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
  // Push new random upper-cased character to guaranteedCharacters to make at least one of the value is always included 
  // if (options.push) {
  //   upperCaseCharactersConfirm;
  //   return guaranteedCharacters + possibleCharacters;
  // }

  // For loop to iterate over the password length provided from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
  var randompassword =""
  for (var i = 0; i < options.passLength; i++) {
    var randompassword = randompassword + getRandomElement(result);
    // return result;
  }

  // For loop to iterate the guarenteed characters to overwrite the generated characters
  // for (var i = 0; i < options; i++) {
    
  // }

  return randompassword
  // // Join the array to make it a singular string to return 
  // return
}


// Write password to the #password input
function writePassword() {
  // Runs the function that will generate the password
  var password = generatePassword();
  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}