const userInput = document.getElementById("user-input");
const validateBtn = document.getElementById("validate-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const pattern1 = /(?:^|\s)1\s[0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const pattern2 = /(?:^|\s)1\s?\([0-9][0-9][0-9]\)\s?[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;
const pattern3 = /(?:^|\s)1\s[0-9][0-9][0-9]\s[0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9](?:$|\s)/;
const pattern4 = /(?:^|1)[0-9][0-9][0-9]-?[0-9][0-9][0-9]-?[0-9][0-9][0-9][0-9](?:$|\s)/;
const pattern5 = /(?:^|\s)\([0-9][0-9][0-9]\)[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9](?:$|\s)/;

const isValid = (str) => pattern1.test(str) || pattern2.test(str) || pattern3.test(str) || pattern4.test(str) || pattern5.test(str);

function showAlert() {
  if (userInput.value == "") {
    alert("Please provide a phone number");
  }
  else {
    if (isValid(userInput.value)) {
      result.innerText = `Valid US number: ${userInput.value}`;
    }
    else {
      result.innerText = `Invalid US number: ${userInput.value}`;
    }
  }
}

function clearInput() {
  userInput.value = "";
  result.innerText = "";
}

validateBtn.addEventListener("click", (e) => {showAlert(); e.preventDefault();});
clearBtn.addEventListener("click", clearInput);