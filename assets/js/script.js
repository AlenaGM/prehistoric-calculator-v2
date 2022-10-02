function clickMe() {
  let firstName = document.getElementById("firstName");
  let phrase = `Nice to meet you, ${firstName.value}! My name is Alёna.`;
  document.getElementById("miracle").innerHTML = phrase;
}

function changeColor(sender) {
  sender.classList.add("selected");
}

class Calculator {
  static addNumbers(firstNumber, secondNumber) {
    document.getElementById("resultNumber").value =
      +firstNumber.value + +secondNumber.value;
  }

  static subtractNumbers(firstNumber, secondNumber) {
    document.getElementById("resultNumber").value =
      firstNumber.value - secondNumber.value;
  }

  static multiplyNumbers(firstNumber, secondNumber) {
    document.getElementById("resultNumber").value =
      firstNumber.value * secondNumber.value;
  }

  static divideNumbers(firstNumber, secondNumber) {
    if (secondNumber.value == 0) {
      document.getElementById("noZero").innerHTML = "We can't divide by zero!";
    } else {
      document.getElementById("resultNumber").value =
        firstNumber.value / secondNumber.value;
    }
  }
}

document.querySelector("#addNumbers").addEventListener("click", () => {
  Calculator.addNumbers(
    document.getElementById("firstNumber"),
    document.getElementById("secondNumber")
  );
});

document.querySelector("#subtractNumbers").addEventListener("click", () => {
  Calculator.subtractNumbers(
    document.getElementById("firstNumber"),
    document.getElementById("secondNumber")
  );
});

document.querySelector("#multiplyNumbers").addEventListener("click", () => {
  Calculator.multiplyNumbers(
    document.getElementById("firstNumber"),
    document.getElementById("secondNumber")
  );
});

document.querySelector("#divideNumbers").addEventListener("click", () => {
  Calculator.divideNumbers(
    document.getElementById("firstNumber"),
    document.getElementById("secondNumber")
  );
});

function clearAllNumbers() {
  document.getElementById("firstNumber").value = "";
  document.getElementById("secondNumber").value = "";
  document.getElementById("resultNumber").value = "";
}

function getBack() {
  let animalImg = document.getElementById("animalImg");
  animalImg.src = "assets/img/prehist1.jpg";
}

function getForward() {
  let animalImg = document.getElementById("animalImg");
  animalImg.src = "assets/img/prehist2.jpg";
}
