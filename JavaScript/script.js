function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let expression = document.getElementById('display').value;
    let result = eval(expression);
    document.getElementById('display').value = result;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}