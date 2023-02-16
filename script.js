// Assignment code here
//if (password == "1234") {
  //location = "media.html"
// } else {
//   document.getElementById("msg").value = "test";
  //location = "error.html"
//

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = prompt("PLease enter a password with a minimum of eight characters. must include");

  console.log("button clicked");
  return "Generated password";
}

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
