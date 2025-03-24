const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');


function cleanInputString(str) {
  const regex = /[(),._-\s\/]/g;
  return str.replace(regex, '').toLowerCase();
}

function isPalindrome() {
  let bool = true;
  const palindromeInput = document.getElementById("text-input").value;
  if (palindromeInput == '') {
    alert("Please input a value");
  }
  else {
    const cleanInput = cleanInputString(palindromeInput);
    const len = cleanInput.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (cleanInput[i] !== cleanInput[len-i-1]) {
        bool = false;
      }
    }

    const message = bool ? '' : 'not';

    result.innerHTML = `${palindromeInput} is ${message} a palindrome`;
    result.classList.remove('hide');
  }
}

checkButton.addEventListener("click", (e) => {e.preventDefault(); isPalindrome()});
