var generateBtn = document.querySelector("#generate");
var lowerCaseArr = "abcdefghijklmnopqrstuvwxyz";
var upperCaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharArr = "`~!@#$%^&*()-_+=:;'.,{}[]";
var numbersArr = "0123456789";
var choiceArr = [];

window.alert("Welcome to the password shazam");

getUserSelection();

function getUserSelection() {
  userLength = window.prompt("How many characters would you like (8-128)?");

  if (isNaN(userLength) || userLength < 8 || userLength > 128) {
    window.alert("Please enter a valid number between 8 and 128.");
    getUserSelection(); 
  }

  if (window.confirm("Would you like Uppercase letters included?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }

  if (window.confirm("Would you like Lowercase letters included?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }

  if (window.confirm("Would you like numbers?")) {
    choiceArr = choiceArr.concat(numbersArr);
  }

  if (window.confirm("Would you like special characters included?")) {
    window.alert("Great! I have everything needed to make you a random password!");
    choiceArr = choiceArr.concat(specialCharArr);
  }
}

// Write password to the #password input
function generatePassword() {
  var password = "";
  for (var i = 0; i < userLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password += choiceArr[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  var password = generatePassword(parseInt(userLength));
  document.getElementById("password").value = password;
});