function pinGenerate() {
  const randomPin = Math.round(Math.random() * 10000);
  return randomPin;
}

function pinGet() {
  const pin = pinGenerate();
  const pinCheck = pin + "";

  if (pinCheck.length === 4) {
    return pin;
  } else {
    return pinGet();
  }
}

document.getElementById("pin-generate").addEventListener("click", function () {
  const pinGetValue = pinGet();
  const pinInput = document.getElementById("pin-input");
  pinInput.value = pinGetValue;
});

document.getElementById("calculator").addEventListener("click", function (event) {
  const clickButton = event.target.innerText;
  const calInputField = document.getElementById("cal-input");
  const addNewNumber = calInputField.value;
  if (isNaN(clickButton)) {
    if (clickButton === "C") {
      calInputField.value = "";
    } else if (clickButton === "<") {
      const deleteLastValue = addNewNumber.split("");
      deleteLastValue.pop();
      const joinDigit = deleteLastValue.join("");
      calInputField.value = joinDigit;
    }
  } else {
    const sumAdd = addNewNumber + clickButton;
    calInputField.value = sumAdd;
  }
});

document.getElementById("submit-btn").addEventListener("click", function () {
  const pinInput = inputValueMatch("pin-input");
  const calInput = inputValueMatch("cal-input");
  const pinSuccess = document.querySelector("#pin-success");
  const pinFailed = document.getElementById("pin-failed");

  if (pinInput === calInput) {
    pinSuccess.style.display = "block";
    pinFailed.style.display = "none";
  } else {
    pinFailed.style.display = "block";
    pinSuccess.style.display = "none";
  }
});

function inputValueMatch(inputValue) {
  const inputValueGet = document.getElementById(inputValue).value;
  const inputValueReturn = inputValueGet;
  return inputValueReturn;
}
