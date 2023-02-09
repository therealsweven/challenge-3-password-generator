// Assignment code here

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = " !#$%&'()*+,-./:;<=>?@[^_`{|}~";
var charNumber = 0;
console.log(charNumber);

// console.log(lowercase.charAt(7));
// console.log(uppercase.charAt(7));
// console.log(numbers.charAt(7));
// console.log(special.charAt(7));

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write function to generate password
function generatePassword() {
  do {
    charNumber = prompt(
      "Please specify number of characters between 8 and 128."
    );
    if (charNumber === null) {
      return; //terminates function and returns to main page
    }
    if (charNumber < 8) {
      alert("You must choose a number of characters greater than 8.");
    } else if (charNumber > 128) {
      alert("You mus choose a number of characters less than 129.");
    }
  } while (charNumber < 8 || charNumber > 128);

  console.log(charNumber); //Testing user input

  var charSet = "";
  var lowYN = confirm(
    "Use lowercase letters? \n Press confirm for yes and cancel for no"
  );
  var uppYN = confirm(
    "Use uppercase letters? \n Press confirm for yes and cancel for no"
  );
  var numYN = confirm(
    "Use numbers? \n Press confirm for yes and cancel for no"
  );
  var specYN = confirm(
    "Use special characters? \n Press confirm for yes and cancel for no"
  );

  //Use conditional statements to define what character set the password generator will be pulling characters from
  if (lowYN == true) {
    charSet += lowercase;
  }
  if (uppYN == true) {
    charSet += uppercase;
  }
  if (numYN == true) {
    charSet += numbers;
  }
  if (specYN == true) {
    charSet += special;
  }
  console.log(charSet); //Te

  var pw = "";
  var addition = [""];
  console.log(pw);
  for (i = 0; i < charNumber; i++) {
    addition[i] = charSet[Math.floor(Math.random() * charSet.length)];
    console.log(addition[i]);
    pw += addition[i];
  }
  console.log(pw);
  return pw;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
