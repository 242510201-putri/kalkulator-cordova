let display = document.getElementById("display");

function append(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function calculate() {
  try {
    let expression = display.value;

    if (/[+\-*/.]$/.test(expression)) {
      expression = expression.slice(0, -1);
    }

    if (expression === "") {
      display.value = "0";
      return;
    }

    let result = eval(expression);

    if (!isNaN(result)) {
      display.value = result;
    }

  } catch {
    display.value = display.value;
  }
}

function plusMinus() {
  display.value = parseFloat(display.value) * -1;
}

function percent() {
  display.value = parseFloat(display.value) / 100;
}