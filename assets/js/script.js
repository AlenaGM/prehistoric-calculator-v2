let firstNumber = document.getElementById ("firstNumber");
let secondNumber = document.getElementById ("secondNumber");
let resultNumber = document.getElementById('resultNumber');

/*Калькулятор*/
function clickMe(){
  let firstName = document.getElementById ("firstName");
  let phrase = (`Приятно познакомиться, ${firstName.value}! А я - Алёна.`);
  document.getElementById('miracle').value = phrase;
  }

function changeColor(sender){
  sender.classList.add("selected");
}

function addNumbers(){;
  document.getElementById('resultNumber').value = (+firstNumber.value + +secondNumber.value);
}

function subtractNumbers(){;
  document.getElementById('resultNumber').value = (firstNumber.value - secondNumber.value);
}

function multiplyNumbers(){;
  document.getElementById('resultNumber').value = (firstNumber.value * secondNumber.value);
}

function divideNumbers(){;
  if(secondNumber.value == 0){
    document.getElementById('noZero').innerHTML = "На ноль делить нельзя!";
  } else {
    resultNumber.value = (firstNumber.value / secondNumber.value);
  }
}

function clearAllNumbers() {;
  document.getElementById('firstNumber').value = '';
  document.getElementById('secondNumber').value = '';
  document.getElementById('resultNumber').value = '';
}


function getBack(){
  let animalImg = document.getElementById('animalImg');
  animalImg.src ="assets/img/prehist1.jpg";
}

function getForward(){
  let animalImg = document.getElementById('animalImg');
  animalImg.src ="assets/img/prehist2.jpg";
}

/*function getThird(){
  let animalImg = document.getElementById('animalImg');
  animalImg.src ="assets/img/prehist3.jpg";
}

function getFourth(){
  let animalImg = document.getElementById('animalImg');
  animalImg.src ="assets/img/prehist4.jpg";
}

function getFifth(){
  let animalImg = document.getElementById('animalImg');
  animalImg.src ="assets/img/prehist5.jpg";
}

function getSixth(){
  let animalImg = document.getElementById('animalImg');
  animalImg.src ="assets/img/prehist6.jpg";
}*/
//test






