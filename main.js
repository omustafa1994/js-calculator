
// Prompt the user to select calc type
var calcType = prompt("Select calc type: Basic or Advance")

// 'if statement' for calc type
if (calcType == "basic") {
  calcTypeBasic();
} else if (calcType == 'advance') {
  calcTypeAdvance();
} else {
  console.log('Error!');
}

// Basic calc type
function calcTypeBasic() {
  var numA, numB, numResult;

  function getnumA() {
    numA = prompt("Please enter first number: ");
    return Number(numA);
  }

  function getnumB() {
    numB = prompt("Please enter second number: ");
    return Number(numB);
  }

  function getOperator() {
    var numOperator = prompt("Please enter operator: ");
    return numOperator;
  }

  function setnumResult() {
    prompt("Result = " + numResult);
  }

  function doCalc() {
    var num1 = getnumA();
    var num2 = getnumB();
    var op = getOperator();

    // 'if statement' for operation
    if (op == "*") {
      numResult = Number(num1) * Number(num2);
    } else if (op == "/") {
      numResult = Number(num1) / Number(num2);
    } else if (op == "-") {
      numResult = Number(num1) - Number(num2);
    } else if (op == "+") {
      numResult = Number(num1) + Number(num2);
    }
    setnumResult();
  }
  doCalc();
}
