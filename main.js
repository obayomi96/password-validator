var myInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var symbol = document.getElementById("symbol");
var length = document.getElementById("length");

/*onclick of the passwordfield, show message box*/
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

/* onclick of outside the password field, hide message box */

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

/* when user starts typing in the PW field*/
/* validate uppercase values*/

myInput.onkeyup = function(){
  let upperCaseLetter = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetter)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

// validate lowercase values

let lowerCaseLetter = /[a-z]/g;
if(myInput.value.match(lowerCaseLetter)) {
  letter.classList.remove("invalid");
  letter.classList.add("valid");
} else {
  letter.classList.remove("valid");
  letter.classList.add("invalid");
}

// validate number
let numbers = /[0-9]/g;
if (myInput.value.match(numbers)) {
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}

// validate symbols
let symbols = /[$@#&!]/g;
if (myInput.value.match(symbols)) {
  symbol.classList.remove("invalid");
  symbol.classList.add("valid");
} else {
  symbol.classList.remove("valid");
  symbol.classList.add("invalid");
}
// validate length

if (myInput.value.length >= 6 && myInput.value.length <= 12) {
  length.classList.remove("invalid");
  length.classList.add("valid");
} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}
  }
