// Get all the keys from the calculator
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

console.log(keys);

// Calculate and get result
var getResult = function(action, num1, num2) {
  // Calculation functions
  var calc = {
    add:      function(num1, num2) {
                return num1 + num2;
              },
    subtract: function(num1, num2) {
                return num1 - num2;
              },
    multiply: function(num1, num2) {
                return num1 * num2;
              },
    divide:   function(num1, num2) {
                return num1 / num2;
              }
  };

  // Calculate numbers from user
  switch (action) {
    case "+":
      var result = calc.add(num1, num2);
      break;
    case "-":
      var result = calc.subtract(num1, num2);
      break;
    case "*":
      var result = calc.multiply(num1, num2);
      break;
    case "/":
      var result = calc.divide(num1, num2);
      break;
    default:
      var result = calc.add(num1, num2);
  }

  return result;
};

// User input functions
var input = {
  action: function() {
            return prompt("What do you want to do?");
          },
  num1:   function() {
            return parseFloat(prompt("Number 1:"));
          },
  num2:   function() {
            return parseFloat(prompt("Number 2:"));
          }
};

// Execute calculation and store result
// var result = getResult(
//                input.action(),
//                input.num1(),
//                input.num2()
//              );

// Display result
// document.getElementById("result").innerHTML = result;

console.log(result);