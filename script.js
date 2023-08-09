var generateBtn = document.querySelector("#generate");
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var numbers = ['0123456789'];
var specChar = ['!@#$%^&*()_+=-?/'];



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = newPassword;
}

function generatePassword(){

    var passLength = parseInt(prompt('Hello! How long do you want your password to be?? (try to keep it between 8-128 characters, thx)'));
    console.log(passLength);

    if (passLength < 8 || passLength > 128) {
      var whoops = alert("Ah Beans, it looks like you chose a number that was either a little too high or a little too low. Go ahead and try again. You got this!");
      return generatePassword();
    }
    console.log(alert("Alright, good choice! You're password will be " + passLength + " characters long!"));

    var uCase = confirm("You wanna use Capital letters in this password?? Click OK if ya do");
    console.log(uCase);

    var lCase = confirm("What about lower case hmmm???");
    console.log(lCase);

    var nums = confirm("Numbers?! You want those things in there???");
    console.log(nums);

    var sChar = confirm("Okay last thing... how about those weird !@%% keys??");
    console.log(sChar);

    if (uCase == false && lCase == false && nums == false && sChar == false) {
      var oopsie = alert('... So... you want nothing?? just ' + passLength + ' characters of... nothing? idk man... I thought you were better than this...');
      return generatePassword();
    }
    if (uCase){
      password +=upperCase;
    }
    if (lCase){
      password +=lowerCase;
    }
    if (nums){
      password +=numbers;
    }
    if (sChar) {
      password +=specChar;
    }

    var newPassword ='';
    for (let i = 0; i < passLength; i++){
      var randomIndex = Math.floor(Math.random() * password.length);
      newPassword += password[randomIndex];
    }

    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
