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
