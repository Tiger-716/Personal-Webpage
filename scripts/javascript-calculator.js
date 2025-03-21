const display = document.getElementById("display");
const clearBtn = document.getElementById("clear");
let term = "";
let terms = [];
let operators = [];
let isNeg = false;

function number(num) {
  var number = document.getElementById(num);
  if (display.innerHTML === "0") {
    display.innerHTML = number.value;
  } else if (number.value !== ".") {
    display.innerHTML += number.value;
  } else if (!term.includes(".")) {
    display.innerHTML += number.value;
  }
  if (isNeg) {
    term = "-".concat(term).concat(number.value);
    isNeg = false;
  } else {
    term = term.concat(number.value);
  }
}

function operator(op) {
  var operator = document.getElementById(op);
  display.innerHTML += operator.value;
  if (term) {
    terms.push(term);
    term = "";
  }
  if (operators.length < terms.length) {
    operators.push(operator.value);
  } else if (operators.length == terms.length) {
    if (operator.value == "-") {
      isNeg = true;
    } else {
      operators[operators.length-1] = operator.value;
      isNeg = false;
    }
  }
}

function equal() {
  let result = parseFloat(terms[0]);
  terms.push(term);
  console.log(term);
  console.log(terms);
  console.log(operators);
  for (let i = 0; i < operators.length; i++) {
    if (operators[i] == "+") {
      result = result + parseFloat(terms[i+1]);
    }
    else if (operators[i] == "-") {
      result = result - parseFloat(terms[i+1]);
    }
    else if (operators[i] == "*") {
      result = result * parseFloat(terms[i+1]);
    }
    else if (operators[i] == "/") {
      result = result / parseFloat(terms[i+1]);
    }
  }
  clear();
  term = result;
  display.innerHTML = result;
}

const clear = () => {
  display.innerHTML = '0';
  term = "";
  terms = [];
  operators = [];
}

clearBtn.addEventListener("click", clear);