$(document).ready(() => {
  $('#mybutton').click(e => {
    e.preventDefault();
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    let thirdNumber = $('#thirdNumber').val();
    let firstInteger = parseInt(firstNumber);
    let secondInteger = parseInt(secondNumber);
    let thirdInteger = parseInt(thirdNumber);
    let finalString = firstNumber + secondNumber + thirdNumber;
    let finalInteger = parseInt(finalString);

    if (firstInteger === 0) {
      document.getElementById("alert").innerHTML = "First number cannot be 0";
      return
    } else if (firstInteger < 0 || secondInteger < 0 || thirdInteger < 0) {
      document.getElementById("alert").innerHTML = "Please enter only positive numbers";
      return
    } else if (firstNumber === "" || secondNumber === "" || thirdNumber === "") {
      document.getElementById("alert").innerHTML = "Please fill in all numbers";
      return
    }

    function factorial(num) {
      if (num < 0) {
        return -1 ;
      } else if (num === 0 || num === 1) {
        return 1;
      }
      for (var i = num - 1; i >= 1; i--) {
        num *= i;
      }
      return num;
    }

    let firstFact = factorial(firstInteger);
    let secondFact = factorial(secondInteger);
    let thirdFact = factorial(thirdInteger);

    let factTotal = firstFact + secondFact + thirdFact;

    let score = document.getElementById("total").innerHTML;
    if (factTotal === finalInteger){
        document.getElementById("guess").innerHTML = factTotal + " is the happy number :)";
        document.getElementById("message").innerHTML = "YOU WIN!"
        document.getElementById("total").innerHTML = score;
        document.getElementById("alert").innerHTML = "";
      } else {
        document.getElementById("guess").innerHTML = firstNumber + " " + secondNumber + " " + thirdNumber + " is not the happy combo :(";
        document.getElementById("message").innerHTML = "Try Again"
        score -= 10;
        document.getElementById("total").innerHTML = score;
        document.getElementById("alert").innerHTML = "";
        if (score <= 0) {
          document.getElementById("guess").innerHTML = firstNumber + " " + secondNumber + " " + thirdNumber + " is not the happy combo :("
          document.getElementById("message").innerHTML = "GAME OVER"
          document.getElementById("mybutton").setAttribute("disabled", "disabled")
          document.getElementById("alert").innerHTML = "";
        };
      }
    })

  $('#clickMe').click(() => {
    document.getElementById("answer").innerHTML = "Happy Number = 145";
    document.getElementById("demo").innerHTML = "1! + 4! + 5! = 145";
    document.getElementById("total").innerHTML = 0;
    document.getElementById("guess").innerHTML = "";
    document.getElementById("message").innerHTML = "GAME OVER"
    document.getElementById("mybutton").setAttribute("disabled", "disabled")
  })
})
