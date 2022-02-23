// cache the DOM

const zero = document.getElementById("0");
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

// initiate global variables

let firstDigit = "";
let numbers = [];
let currentNumber = [];
let latestNumber;
let convertNum;
let displayNum;
let deleteNum;
let theView = [];
let theViewFinal = "";

// enable user to select decimal

decimal.addEventListener("click", (e) => {
  if (
    currentNumber.includes(".") ||
    numbers.includes(".") ||
    firstDigit.includes(".")
  ) {
  } else if (currentNumber.length === 0) {
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
  checkDisplayLength();
});

// enable the user to select numbers

zero.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
  showCalc();
});

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
  showCalc();
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
  showCalc();
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
  showCalc();
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
  showCalc();
  // always add display length here
  checkDisplayLength();
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
  showCalc();
});

six.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
  showCalc();
});

seven.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
  showCalc();
});

eight.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
  showCalc();
});

nine.addEventListener("click", (e) => {
  if (currentNumber.length === 0) {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  } else {
    firstDigit += e.target.value;
    display.innerText = firstDigit;
    convertNum = parseFloat(firstDigit);
  }
  showCalc();
});

// enable player to select sum.

operateSum.addEventListener("click", (e) => {
  // this first if statement could also be 'do nothing' if these conditions match
  if (numbers[1] === "-" || numbers[1] === "x" || numbers[1] === "/") {
    numbers.pop();
    numbers.push(e.target.value);
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = ""; // if something starts breaking it's due to clearing firstdigit and convertnum
  } else if (
    currentNumber[1] === "-" ||
    currentNumber[1] === "x" ||
    currentNumber[1] === "/"
  ) {
    currentNumber.pop();
    currentNumber.push(e.target.value);
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = "";
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
          convertNum = "";
        } else {
          displayNum = parseFloat(operate(numbers).toFixed(2));
          if (displayNum % 1 === 0) {
            displayNum.pop();
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
            convertNum = "";
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
  }
  showCalc();
});

// enable to subtract and use negative numbers

operateSubtract.addEventListener("click", (e) => {
  if (numbers[1] === "+" || numbers[1] === "*" || numbers[1] === "/") {
    numbers.pop();
    numbers.push(e.target.value);
    //the issue is here. The second three is not being pushed in time
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = "";
  } else if (
    currentNumber[1] === "+" ||
    currentNumber[1] === "*" ||
    currentNumber[1] === "/"
  ) {
    currentNumber.pop();
    currentNumber.push(e.target.value);
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = "";
  } else {
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
      // comes through here
      if (typeof numbers[0] === "number") {
        numbers.push(e.target.value);
        display.innerText = e.target.value;
        // 2/17 -- should come through here
        firstDigit = "";
        convertNum = "";
      } else if (typeof currentNumber[0] === "number") {
        currentNumber.push(e.target.value);
        display.innerText = e.target.value;
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
  }
  showCalc();
});

// enable player to select multiply (x)

operateMultiply.addEventListener("click", (e) => {
  // this first if statement could also be 'do nothing' if these conditions match
  if (numbers[1] === "-" || numbers[1] === "+" || numbers[1] === "/") {
    numbers.pop();
    numbers.push(e.target.value);
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = "";
    console.log(firstDigit);
    console.log(convertNum);
  } else if (
    currentNumber[1] === "-" ||
    currentNumber[1] === "+" ||
    currentNumber[1] === "/"
  ) {
    currentNumber.pop();
    currentNumber.push(e.target.value);
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = "";
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
          convertNum = "";
        } else {
          displayNum = parseFloat(operate(numbers).toFixed(2));
          if (displayNum % 1 === 0) {
            displayNum.pop();
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
            convertNum = "";
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
  }
  showCalc();
});

// enable player to divide

operateDivide.addEventListener("click", (e) => {
  // if I want things to be changed, get rid of this first if else if condition. Might break other things.
  if (numbers[1] === "-" || numbers[1] === "*" || numbers[1] === "+") {
    // if this stops working, just comment out the code and make it nothing
    numbers.pop();
    numbers.push(e.target.value);
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = "";
  } else if (
    currentNumber[1] === "-" ||
    currentNumber[1] === "*" ||
    currentNumber[1] === "+"
  ) {
    currentNumber.pop();
    currentNumber.push(e.target.value);
    display.innerText = e.target.value;
    firstDigit = "";
    convertNum = "";
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
          convertNum = "";
        } else {
          displayNum = parseFloat(operate(numbers).toFixed(2));
          if (displayNum % 1 === 0) {
            displayNum.pop();
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
            convertNum = "";
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
  }
  showCalc();
});

// enable player to select equals
// will need to input this -- if (typeof numbers.at(-1) === "number" || typeof currentNumber.at(-1) === "number")

operateEquals.addEventListener("click", (e) => {
  if (
    numbers.includes("+") === true ||
    currentNumber.includes("+") === true ||
    numbers.includes("-") === true ||
    currentNumber.includes("-") === true ||
    numbers.includes("*") === true ||
    currentNumber.includes("*") === true ||
    numbers.includes("/") === true ||
    currentNumber.includes("/") === true
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
          convertNum = "";
        } else {
          // will need to replicate this for sum operations
          displayNum = parseFloat(operate(numbers).toFixed(2));
          if (displayNum % 1 === 0) {
            displayNum.pop();
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
            convertNum = "";
          } else {
            display.innerText = displayNum;
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
            convertNum = "";
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
          convertNum = "";
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
            convertNum = "";
          } else {
            display.innerText = displayNum;
            currentNumber = [];
            currentNumber.push(displayNum);
            numbers = [];
            firstDigit = "";
            convertNum = "";
          }
        }
      }
    }
  }
  showCalc();
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
  numbersCalc.innerText = "";
  theView = [];
  theViewFinal = "";
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
  } else if (
    numbers[1] === "+" ||
    numbers[1] === "-" ||
    numbers[1] === "*" ||
    numbers[1] === "/"
  ) {
    numbers.pop();
    // 2/22
    display.innerText = numbers;
  } else if (currentNumber.length >= 2) {
    console.log(numbers);
    console.log(currentNumber);
    currentNumber.pop();

    display.innerText = currentNumber;
    if (currentNumber.length === 0) {
      display.innerText = 0;
    }
  }
  showCalc();
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
  } else {
    location.reload();
    console.log(numbers);
    console.log(currentNumber);
    console.log(convertNum);
  }
};

// helper functions
// function to add two numbers

const add = function (num1, num2) {
  theView = [];
  theViewFinal = "";
  theView = [num1, "+", num2];
  theViewFinal = theView.join(" ");

  return num1 + num2;
};

// function to substract two numbers

const subtract = function (num1, num2) {
  theView = [];
  theViewFinal = "";
  theView = [num1, "-", num2];
  theViewFinal = theView.join(" ");

  return num1 - num2;
};

// function to multiply two numbers

const multiply = function (num1, num2) {
  theView = [];
  theViewFinal = "";
  theView = [num1, "*", num2];
  theViewFinal = theView.join(" ");

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
    return;
  } else {
    theView = [];
    theViewFinal = "";
    theView = [num1, "/", num2];
    theViewFinal = theView.join(" ");

    return num1 / num2;
  }
};

// function to check the displays length -- finish this up
function checkDisplayLength() {
  if (display.innerText.length >= 13 && display.innerText.length < 15) {
    display.style.fontSize = "50px";
    /*alert(`You're breaking the calc! 13-digits max, please.`);
    display.innerText = 0;
    firstDigit = "";
    numbers = [];
    currentNumber = [];
    latestNumber = "";
    convertNum = "";
    displayNum = "";*/
  } else if (display.innerText.length >= 15) {
    alert(`You're breaking the calc! 14-digits max, please.`);
    //location.reload()
    display.style.fontSize = "60px";
    display.innerText = 0;
    numbersCalc.innerText = "";
    firstDigit = "";
    numbers = [];
    currentNumber = [];
    latestNumber = "";
    convertNum = "";
    displayNum = "";
    theViewFinal = "";
    theView = "";
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

function showCalc() {
  if (currentNumber.length === 2) {
    numbersCalc.innerText = `${currentNumber.join(" ")}`;
    console.log(`it went through first condition`);
    console.log(`convertNum is ${convertNum}`);
    console.log(`typeof convertNum.length is ${typeof convertNum}`);
    console.log(currentNumber);
  } else if (numbers.length === 2) {
    numbersCalc.innerText = numbers.join(" ");
    console.log(convertNum);
  } else if (theViewFinal.length != 0) {
    numbersCalc.innerText = `${theViewFinal} =`;
  } else {
    numbersCalc.innerText = "";
  }
}

// adding keyboard support for all numbers and operations
document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "." && display.innerText != ".") {
      e.target.value = ".";
      if (
        currentNumber.includes(".") ||
        numbers.includes(".") ||
        firstDigit.includes(".")
      ) {
      } else if (currentNumber.length === 0) {
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
      checkDisplayLength();
    } else if (e.key === "1") {
      if (currentNumber.length === 0) {
        e.target.value = "1";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "1";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "2") {
      if (currentNumber.length === 0) {
        e.target.value = "2";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "2";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "3") {
      if (currentNumber.length === 0) {
        e.target.value = "3";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "3";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "4") {
      if (currentNumber.length === 0) {
        e.target.value = "4";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "4";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "5") {
      if (currentNumber.length === 0) {
        e.target.value = "5";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "5";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "6") {
      if (currentNumber.length === 0) {
        e.target.value = "6";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "6";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "7") {
      if (currentNumber.length === 0) {
        e.target.value = "7";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "7";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "8") {
      if (currentNumber.length === 0) {
        e.target.value = "8";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "8";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "9") {
      if (currentNumber.length === 0) {
        e.target.value = "9";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "9";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "0") {
      if (currentNumber.length === 0) {
        e.target.value = "0";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      } else {
        e.target.value = "0";
        firstDigit += e.target.value;
        display.innerText = firstDigit;
        convertNum = parseFloat(firstDigit);
      }
      showCalc();
      // always add display length here
      checkDisplayLength();
    } else if (e.key === "Backspace") {
      if (firstDigit.length > 1) {
        deleteNum = firstDigit.substring(0, firstDigit.length - 1);
        firstDigit = deleteNum;

        display.innerText = firstDigit;

        convertNum = parseFloat(firstDigit);
      } else if (
        numbers[1] === "+" ||
        numbers[1] === "-" ||
        numbers[1] === "*" ||
        numbers[1] === "/"
      ) {
        numbers.pop();
        // 2/22
        display.innerText = numbers;
      } else if (currentNumber.length >= 2) {
        console.log(numbers);
        console.log(currentNumber);
        currentNumber.pop();

        display.innerText = currentNumber;
        if (currentNumber.length === 0) {
          display.innerText = 0;
        }
      }
      showCalc();
    } else if (e.key === "Enter") {
      if (
        numbers.includes("+") === true ||
        currentNumber.includes("+") === true ||
        numbers.includes("-") === true ||
        currentNumber.includes("-") === true ||
        numbers.includes("*") === true ||
        currentNumber.includes("*") === true ||
        numbers.includes("/") === true ||
        currentNumber.includes("/") === true
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
              convertNum = "";
            } else {
              // will need to replicate this for sum operations
              displayNum = parseFloat(operate(numbers).toFixed(2));
              if (displayNum % 1 === 0) {
                displayNum.pop();
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
              } else {
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
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
              convertNum = "";
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
                convertNum = "";
              } else {
                display.innerText = displayNum;
                currentNumber = [];
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
              }
            }
          }
        }
      }
      showCalc();
    } else if (e.key === "-") {
      e.target.value = "-";
      console.log(e.key);
      if (numbers[1] === "+" || numbers[1] === "*" || numbers[1] === "/") {
        numbers.pop();
        numbers.push(e.target.value);
        //the issue is here. The second three is not being pushed in time
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = "";
      } else if (
        currentNumber[1] === "+" ||
        currentNumber[1] === "*" ||
        currentNumber[1] === "/"
      ) {
        currentNumber.pop();
        currentNumber.push(e.target.value);
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = "";
      } else {
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
          // comes through here
          if (typeof numbers[0] === "number") {
            numbers.push(e.target.value);
            display.innerText = e.target.value;
            // 2/17 -- should come through here
            firstDigit = "";
            convertNum = "";
          } else if (typeof currentNumber[0] === "number") {
            currentNumber.push(e.target.value);
            display.innerText = e.target.value;
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
      }
      showCalc();
    } else if (e.shiftKey === true && e.key === "+") {
      e.target.value = "+";
      if (numbers[1] === "-" || numbers[1] === "x" || numbers[1] === "/") {
        numbers.pop();
        numbers.push(e.target.value);
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = ""; // if something starts breaking it's due to clearing firstdigit and convertnum
      } else if (
        currentNumber[1] === "-" ||
        currentNumber[1] === "x" ||
        currentNumber[1] === "/"
      ) {
        currentNumber.pop();
        currentNumber.push(e.target.value);
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = "";
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
              convertNum = "";
            } else {
              displayNum = parseFloat(operate(numbers).toFixed(2));
              if (displayNum % 1 === 0) {
                displayNum.pop();
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
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
      }
      showCalc();
    } else if (e.shiftKey === true && e.key === "*") {
      e.target.value = "*";
      if (numbers[1] === "-" || numbers[1] === "+" || numbers[1] === "/") {
        numbers.pop();
        numbers.push(e.target.value);
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = "";
        console.log(firstDigit);
        console.log(convertNum);
      } else if (
        currentNumber[1] === "-" ||
        currentNumber[1] === "+" ||
        currentNumber[1] === "/"
      ) {
        currentNumber.pop();
        currentNumber.push(e.target.value);
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = "";
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
              convertNum = "";
            } else {
              displayNum = parseFloat(operate(numbers).toFixed(2));
              if (displayNum % 1 === 0) {
                displayNum.pop();
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
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
      }
      showCalc();
    } else if (e.key === "/") {
      e.target.value = "/";
      if (numbers[1] === "-" || numbers[1] === "*" || numbers[1] === "+") {
        // if this stops working, just comment out the code and make it nothing
        numbers.pop();
        numbers.push(e.target.value);
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = "";
      } else if (
        currentNumber[1] === "-" ||
        currentNumber[1] === "*" ||
        currentNumber[1] === "+"
      ) {
        currentNumber.pop();
        currentNumber.push(e.target.value);
        display.innerText = e.target.value;
        firstDigit = "";
        convertNum = "";
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
              convertNum = "";
            } else {
              displayNum = parseFloat(operate(numbers).toFixed(2));
              if (displayNum % 1 === 0) {
                displayNum.pop();
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
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
      }
      showCalc();
    } else if (e.key === "=") {
      e.target.value = "=";
      if (
        numbers.includes("+") === true ||
        currentNumber.includes("+") === true ||
        numbers.includes("-") === true ||
        currentNumber.includes("-") === true ||
        numbers.includes("*") === true ||
        currentNumber.includes("*") === true ||
        numbers.includes("/") === true ||
        currentNumber.includes("/") === true
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
              convertNum = "";
            } else {
              // will need to replicate this for sum operations
              displayNum = parseFloat(operate(numbers).toFixed(2));
              if (displayNum % 1 === 0) {
                displayNum.pop();
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
              } else {
                display.innerText = displayNum;
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
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
              convertNum = "";
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
                convertNum = "";
              } else {
                display.innerText = displayNum;
                currentNumber = [];
                currentNumber.push(displayNum);
                numbers = [];
                firstDigit = "";
                convertNum = "";
              }
            }
          }
        }
      }
      showCalc();
    } else {
    }
  },
  false
);
