// Assignment Code
var generateBtn = document.querySelector("#generate");
window.alert("Welcome to the password shazam");
if (window.confirm("Would you like numbers included?")) {
  window.confirm("Ok you got it!");
}
if (window.confirm("Would you like Uppercase letters included?")) {
  window.confirm("Alright you're the boss!");
}
if (window.confirm("Would you like Lowercase letters included?")) {
  window.confirm("Pefect!");
}
if (window.confirm("How many characters would you like (8-128)?")) {
  window.confirm("Pefect!");
}
if (window.confirm("Would you like special characters included?")) {
  window.confirm("Great! I have everything needed to make you a random password!");
}

// Write password to the #password input
new Array(12).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("");
 
console.log(writePassword());
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function displayPassword() {
  document.querySelector("#generate").innerHTML = password();
}
