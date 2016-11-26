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

  if (factTotal === finalInteger){
    alert("you win!");
    } else {
      alert("try again");
    }
  })
})
