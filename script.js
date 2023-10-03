// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symboles = "`~!@#$%^&*()-_+=:;'.,";
var numbers = "0123456789";

window.alert("Welcome to the password shazam");

var passwordText = document.querySelector("#password");
passwordText.value = password;
var userLength = window.prompt("How many characters would you like (8-128)?");
console.log(userLength);
if (isNaN(userlength) || userLength <8 || userLength > 128){
window.alert("How many characters would you like (8-128)?");
writePassword();
}
getUserSelection();

window.confirm("Would you like Uppercase letters included? ok for yes, cancel for no") {
  if getUserSelection
  
}
if (window.confirm("Would you like Lowercase letters included?")) {
  
}
if (window.confirm("Would you like numbers?")) {
  ;
}
if (window.confirm("Would you like special characters included?")) {
  window.confirm("Great! I have everything needed to make you a random password!");
}

// Write password to the #password input
function writePassword(){
  var password = generatePassword();

}

var password = generatePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function displayPassword() {
  document.querySelector("#generate").innerHTML = password();
}
