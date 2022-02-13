// cache the DOM

const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const decimal = document.getElementById(".");

const operateSum = document.getElementById("+");
const operateSubtract = document.getElementById("-");
const operateDivide = document.getElementById("/");
const operateMultiply = document.getElementById("x");
const operateEquals = document.getElementById("=");

const display = document.getElementById("display");
const clear = document.getElementById("clear");
const remove = document.getElementById("remove");
const allButtons = document.getElementsByClassName("button");

const numbersCalc = document.getElementById("numbersCalc");
const currentNumberCalc = document.getElementById("currentNumberCalc");

let firstDigit = "";
let numbers = [];
let currentNumber = [];
let latestNumber;
let convertNum;
let displayNum;
let deleteNum;
//let convertNum

//tests
// 1 + 1 = -- works
// 1 + 1 + 1 -- works
// 11 + 11 = -- works
// 11 + 11 = + 11 = works
// 33 + = + = -- works
// 33 + = + = 33 + = -- works
// 33 + 33 = + = + = -- works
// just pressing = -- works
// pressing 1 + = -- works
// 3.2 + 2.1 = -- works
// 3.2 + 2.1 = + 2.1 = + 3.2 -- works
// 3.3333 + 3.3333 + 3.3333 + 3.3333 + -- works
// build function for delete button -- works
// .... + + -- works
// 1 + + -- works
// 321 + 321 + 321 = + = -- works

// make it work with negative numbers. This should likely only be checking/working with first digit. it will be addevent listener with if/else statement -- done
// if subtraction is the operator, i should not be able to press a negative number again -- done
// add function to shrink numbers and/or give warning with too many digits. Built at bottom
// make delete button show previous number if operator is deleted
// make - = not show 0 in display -- done
// make delete work with subtraction

// 33 - = - = -- works
// 33 - = - = 33 - = -- works
// 33 - 33 = - = - = -- works
// 1 - - -- works
// 321 - 321 - 321 = - =  -- works
// 12 - 3 - 3 - 3 works

// 123 - delete -- works
// 123 - + -- doesn't work
// 123 + delete -- works
// 123 + delete + 3 = -- works
// 123 - delete - 3 = -- works 
// 123 - delete + 3 = -- works

// enable player to select decimal

decimal.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
  // checks and removes duplicate decimals
  decimalFindAndRemove();
});

// enable negative numbers

operateSubtract.addEventListener("click", (e) => {
  if (numbers[1] === "-" || currentNumber[1] === "-") {
    if (numbers.length >= 2) {
      numbers.push(convertNum);
      convertNum = "";
      if (typeof numbers.at(-1) !== "number") {
        display.innerText = e.target.value;
        numbers.pop();
      } else {
        // need to replicate for second situation within sum
        if (operate(numbers) % 1 === 0) {
          convertNum = "";
          display.innerText = operate(numbers);
          currentNumber.push(operate(numbers));
          currentNumber.push(e.target.value);
          numbers = [];
          firstDigit = "";
          //convertNum = "";
        } else {
          displayNum = parseFloat(operate(numbers).toFixed(2));
          if (displayNum % 1 === 0) {
            displayNum.pop();
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
          } else {
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            currentNumber.push(e.target.value);
            numbers = [];
            firstDigit = "";
            displayNum = "";
            convertNum = "";
          }
        }
      }
    } else if (currentNumber.length === 0) {
      if (isNaN(convertNum) === true) {
      } /*else if (convertNum === "") {
        // working here
        numbers.push(e.target.value);
        display.innerText = e.target.value;
      }*/ // ^^ likely need to add this
      else {
        numbers.push(convertNum);
        if (typeof numbers.at(-1) !== "number") {
          display.innerText = e.target.value;
          numbers.pop();
        } else {
          convertNum = "";
          display.innerText = e.target.value;
          numbers.push(e.target.value);
          firstDigit = "";
        }
      }
    } else if (currentNumber.length > 1) {
      currentNumber.push(convertNum);
      if (typeof currentNumber.at(-1) !== "number") {
        display.innerText = e.target.value;
        currentNumber.pop();
        // it's going to a different part of this function and going hawaywire by consistently clicking +
      } else {
        if (operate(currentNumber) % 1 === 0) {
          currentNumber.push(e.target.value);
          display.innerText = operate(currentNumber);
          latestNumber = operate(currentNumber);
          numbers = [];
          currentNumber = [];
          currentNumber.push(latestNumber);
          currentNumber.push(e.target.value);
          firstDigit = "";
          convertNum = "";
        } else {
          displayNum = parseFloat(operate(currentNumber).toFixed(2));
          if (displayNum % 1 === 0) {
            //this code could be the same as the equals 'currentNumber'
            display.innerText = displayNum;
            numbers = [];
            currentNumber = [];
            currentNumber.push(displayNum);
            currentNumber.push(e.target.value);
            convertNum = "";
            firstDigit = "";
            displayNum = "";
          } else {
            display.innerText = displayNum;
            numbers = [];
            currentNumber = [];
            currentNumber.push(displayNum);
            currentNumber.push(e.target.value);

            displayNum = "";
            firstDigit = "";
            convertNum = "";
            latestNumber = "";
          }
        }
      }
    } else {
      display.innerText = e.target.value;
      currentNumber.push(e.target.value);
      firstDigit = "";
      convertNum = "";
    }
  } else {
    if (typeof numbers[0] === "number") {
      numbers.push(e.target.value);
      display.innerText = e.target.value;
      // 2/22
      firstDigit = "";

      convertNum = "";
    } else {
      // what else goes in here?
      if (typeof convertNum !== "number") {
        if (currentNumber.length === 0) {
          firstDigit += e.target.value;
          display.innerText = firstDigit;
          convertNum = parseFloat(firstDigit);
        } else {
          firstDigit += e.target.value;
          display.innerText = firstDigit;
          convertNum = parseFloat(firstDigit);
        }
        // checks and removes duplicate decimals
        negativeFindAndRemove();
      } else {
        if (numbers.length >= 2) {
          numbers.push(convertNum);
          convertNum = "";
          if (typeof numbers.at(-1) !== "number") {
            display.innerText = e.target.value;
            numbers.pop();
          } else {
            // need to replicate for second situation within sum
            if (operate(numbers) % 1 === 0) {
              convertNum = "";
              display.innerText = operate(numbers);
              currentNumber.push(operate(numbers));
              currentNumber.push(e.target.value);
              numbers = [];
              firstDigit = "";
              //convertNum = "";
            } else {
              displayNum = parseFloat(operate(numbers).toFixed(2));
              if (displayNum % 1 === 0) {
                displayNum.pop();
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
              } else {
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                currentNumber.push(e.target.value);
                numbers = [];
                firstDigit = "";
                displayNum = "";
                convertNum = "";
              }
            }
          }
        } else if (currentNumber.length === 0) {
          if (isNaN(convertNum) === true) {
          } else {
            numbers.push(convertNum);
            if (typeof numbers.at(-1) !== "number") {
              display.innerText = e.target.value;
              numbers.pop();
            } else {
              // issue is here 2/23/22

              convertNum = "";
              display.innerText = e.target.value;
              numbers.push(e.target.value);
              firstDigit = "";
            }
          }
        } else if (currentNumber.length > 1) {
          currentNumber.push(convertNum);
          if (typeof currentNumber.at(-1) !== "number") {
            display.innerText = e.target.value;
            currentNumber.pop();
            // it's going to a different part of this function and going hawaywire by consistently clicking +
          } else {
            if (operate(currentNumber) % 1 === 0) {
              currentNumber.push(e.target.value);
              display.innerText = operate(currentNumber);
              latestNumber = operate(currentNumber);
              numbers = [];
              currentNumber = [];
              currentNumber.push(latestNumber);
              currentNumber.push(e.target.value);
              firstDigit = "";
              convertNum = "";
            } else {
              displayNum = parseFloat(operate(currentNumber).toFixed(2));
              if (displayNum % 1 === 0) {
                //this code could be the same as the equals 'currentNumber'
                display.innerText = displayNum;
                numbers = [];
                currentNumber = [];
                currentNumber.push(displayNum);
                currentNumber.push(e.target.value);
                convertNum = "";
                firstDigit = "";
                displayNum = "";
              } else {
                display.innerText = displayNum;
                numbers = [];
                currentNumber = [];
                currentNumber.push(displayNum);
                currentNumber.push(e.target.value);

                displayNum = "";
                firstDigit = "";
                convertNum = "";
                latestNumber = "";
              }
            }
          }
        } else {
          display.innerText = e.target.value;
          currentNumber.push(e.target.value);
          firstDigit = "";
          convertNum = "";
        }
      }
    }
  }
});

// enable the player to select numbers

one.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
});

two.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
});

three.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
});

four.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
});

five.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
});

// enable player to select sum.

operateSum.addEventListener("click", (e) => {
  if (numbers.length >= 2) {
    numbers.push(convertNum);

    convertNum = "";
    if (typeof numbers.at(-1) !== "number") {
      display.innerText = e.target.value;
      numbers.pop();
    } else {
      // need to replicate for second situation within sum
      if (operate(numbers) % 1 === 0) {
        convertNum = "";
        display.innerText = operate(numbers);
        currentNumber.push(operate(numbers));
        currentNumber.push(e.target.value);
        numbers = [];
        firstDigit = "";
        //convertNum = "";
      } else {
        displayNum = parseFloat(operate(numbers).toFixed(2));
        if (displayNum % 1 === 0) {
          displayNum.pop();
          display.innerText = displayNum;
          currentNumber.push(displayNum);
          numbers = [];
          firstDigit = "";
        } else {
          display.innerText = displayNum;
          currentNumber.push(displayNum);
          currentNumber.push(e.target.value);
          numbers = [];
          firstDigit = "";
          displayNum = "";
          convertNum = "";
        }
      }
    }
  } else if (currentNumber.length === 0) {
    if (isNaN(convertNum) === true) {
    } else if (convertNum === "") {
      // working here
      numbers.push(e.target.value);
      display.innerText = e.target.value;
    } else {
      // working here
      numbers.push(convertNum);
      if (typeof numbers.at(-1) !== "number") {
        display.innerText = e.target.value;
        numbers.pop();
      } else {
        convertNum = "";
        display.innerText = e.target.value;
        numbers.push(e.target.value);
        firstDigit = "";
      }
    }
  } else if (currentNumber.length > 1) {
    currentNumber.push(convertNum);
    if (typeof currentNumber.at(-1) !== "number") {
      display.innerText = e.target.value;
      currentNumber.pop();
    } else {
      if (operate(currentNumber) % 1 === 0) {
        currentNumber.push(e.target.value);
        display.innerText = operate(currentNumber);
        latestNumber = operate(currentNumber);
        numbers = [];
        currentNumber = [];
        currentNumber.push(latestNumber);
        currentNumber.push(e.target.value);
        firstDigit = "";
        convertNum = "";
      } else {
        displayNum = parseFloat(operate(currentNumber).toFixed(2));
        if (displayNum % 1 === 0) {
          //this code could be the same as the equals 'currentNumber'
          display.innerText = displayNum;
          numbers = [];
          currentNumber = [];
          currentNumber.push(displayNum);
          currentNumber.push(e.target.value);
          convertNum = "";
          firstDigit = "";
          displayNum = "";
        } else {
          display.innerText = displayNum;
          numbers = [];
          currentNumber = [];
          currentNumber.push(displayNum);
          currentNumber.push(e.target.value);

          displayNum = "";
          firstDigit = "";
          convertNum = "";
          latestNumber = "";
        }
      }
    }
  } else {
    display.innerText = e.target.value;
    currentNumber.push(e.target.value);
    firstDigit = "";
    convertNum = "";
  }
});

// enable player to select equals
// will need to input this -- if (typeof numbers.at(-1) === "number" || typeof currentNumber.at(-1) === "number")

operateEquals.addEventListener("click", (e) => {
  if (
    numbers.includes("+") === true ||
    currentNumber.includes("+") === true ||
    numbers.includes("-") === true ||
    currentNumber.includes("-") === true
  ) {
    if (currentNumber.length === 0) {
      numbers.push(convertNum);
      if (typeof numbers.at(-1) !== "number") {
        display.innerText = numbers.at(0);
        numbers.pop();
      } else {
        if (operate(numbers) % 1 === 0) {
          display.innerText = operate(numbers);
          currentNumber.push(operate(numbers));
          numbers = [];
          firstDigit = "";
        } else {
          // will need to replicate this for sum operations
          displayNum = parseFloat(operate(numbers).toFixed(2));
          if (displayNum % 1 === 0) {
            displayNum.pop();
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
          } else {
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
          }
        }
      }
    } else if (currentNumber.length === 1 || numbers.length === 1) {
      alert("You already pressed equals! We'll clear things for you.");
      display.innerText = 0;
      firstDigit = "";
      numbers = [];
      currentNumber = [];
      latestNumber = "";
      convertNum = "";
    } else {
      currentNumber.push(convertNum);
      if (typeof currentNumber.at(-1) !== "number") {
        display.innerText = currentNumber.at(0);
        currentNumber.pop();
      } else {
        // will need to replicate this for sum. Might be wrong. Should pop if decimal ends in 0
        if (operate(currentNumber) % 1 === 0) {
          display.innerText = operate(currentNumber);
          latestNumber = operate(currentNumber);
          numbers = [];
          currentNumber = [];
          currentNumber.push(latestNumber);
          latestNumber = "";
          firstDigit = "";
        } else {
          displayNum = parseFloat(operate(currentNumber).toFixed(2));
          if (displayNum % 1 === 0) {
            // this should likely be if last digital in display num is 0
            displayNum.pop(); // this should be the substring method. seems to work though
            display.innerText = displayNum;
            currentNumber = [];
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
          } else {
            display.innerText = displayNum;
            currentNumber = [];
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
          }
        }
      }
    }
  }
});

//enable the player to select clear
clear.addEventListener("click", (e) => {
  display.style.fontSize = "60px";
  display.innerText = 0;
  firstDigit = "";
  numbers = [];
  currentNumber = [];
  latestNumber = "";
  convertNum = "";
  displayNum = "";
});

//enable the player to select remove
remove.addEventListener("click", (e) => {
  // get rid of two decimals in a row

  // if numbers and currentnumbers are empty, remove last digit
  if (firstDigit.length > 1) {
    deleteNum = firstDigit.substring(0, firstDigit.length - 1);
    firstDigit = deleteNum;

    display.innerText = firstDigit;

    convertNum = parseFloat(firstDigit);
  } else if (numbers[1] === "+" || numbers[1] === "-") {
    numbers.pop();
    // 2/22
    display.innerText = numbers;
  } else if (currentNumber.length >= 1) {
    currentNumber.pop();

    display.innerText = currentNumber;
    if (currentNumber.length === 0) {
      display.innerText = 0;
    }
  }
});

// function to make any calculation of two numbers

const operate = function ([num1, operator, num2]) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  }
  return alert(`That's not gonna work. Add, subtract, multiply, or divide.`);
};

// helper functions
// function to add two numbers

const add = function (num1, num2) {
  return num1 + num2;
};

// function to substract two numbers

const subtract = function (num1, num2) {
  return num1 - num2;
};

// function to multiply two numbers

const multiply = function (num1, num2) {
  return num1 * num2;
};

// function to divide two numbers

const divide = function (num1, num2) {
  if (num2 === 0) {
    alert(
      `Earth will be swallowed by a black hole if you divide by zero. Try something else.`
    );
    display.innerText = 0;
    firstDigit = "";
    numbers = [];
    currentNumber = [];
    latestNumber = "";
    convertNum = "";
    displayNum = "";
  } else {
    return num1 / num2;
  }
};

// function to check the displays length -- finish this up
function checkDisplayLength() {
  if (display.innerText.length >= 14) {
    display.style.fontSize = "50px";
    /*alert(`You're breaking the calc! 13-digits max, please.`);
    display.innerText = 0;
    firstDigit = "";
    numbers = [];
    currentNumber = [];
    latestNumber = "";
    convertNum = "";
    displayNum = "";*/
  }
}

// get rid of multiple decimals
function decimalFindAndRemove() {
  for (let i = 0; i < firstDigit.length; i++) {
    if (firstDigit[i] === firstDigit[i - 1]) {
      deleteNum = firstDigit.substring(0, [firstDigit.length - 1]);
      firstDigit = deleteNum;
      display.innerText = firstDigit;
    }
  }
}

// get rid of multiple subtract signs
function negativeFindAndRemove() {
  for (let i = 0; i < firstDigit.length; i++) {
    if (firstDigit[i] === firstDigit[i - 1]) {
      deleteNum = firstDigit.substring(0, [firstDigit.length - 1]);
      firstDigit = deleteNum;
      display.innerText = firstDigit;
    }
  }
}
