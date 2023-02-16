// Assignment code here
//if (password == "1234") {
  //location = "media.html"
// } else {
//   document.getElementById("msg").value = "test";
  //location = "error.html"
//
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var characterPool = []
var randomPassword = []
function generatePassword() {
  var password = prompt("How long would your password to be? Must be at least 8 characters and no more that 128");
  var confirmNumbers = confirm("Would you like to include numbers in your password?");
  var confirmLowerCase = confirm("Would you like to include lowercase letters?");
  var confirmUpperCase = confirm("Would you like to add uppercase letters?");
  var confrimSpecialCharacters = confirm("Would you like to add special characters?");

if (confirmNumbers === true){
  characterPool = characterPool.concat(numericCharacters)
}

if (confrimSpecialCharacters === true){
  characterPool = characterPool.concat(specialCharacters)
}

if (confirmLowerCase === true){
  characterPool = characterPool.concat(lowerCase)
}

if (confirmUpperCase === true){
  characterPool = characterPool.concat(upperCase)
}


for (var i=0 ;i<password;i++){
  var randomIndex = Math.floor(Math.random()*characterPool.length)
  var indexValue = characterPool[randomIndex]
  randomPassword.push(indexValue)
  console.log(randomPassword)
}


  console.log("button clicked");
  return randomPassword.join("");
}

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
