// Clear the entire display
function clearDisplay() {
    document.getElementById('display').value = '';
}
// Add clear button functionality
document.getElementById('clear').addEventListener('click', clearDisplay);

// Function to handle backspace
function backSpace() {
    const display = document.getElementById('display');
    display.value = display.value.substring(0, display.value.length - 1);
}
// show the value in Display
function math(value) {
    document.getElementById('display').value += value;
}

// Function to handle operator
function operator(op) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];
    
    // Prevent adding multiple operators consecutively
    if (!['+', '-', '*', '/', '%', '.'].includes(lastChar)) {
        display.value += op;
    } else if (op === '.') {
        // Allow decimal if the last segment of the number doesn't contain a decimal
        const parts = display.value.split(/[\+\-\*\/\%]/);
        const lastPart = parts[parts.length - 1];
        if (!lastPart.includes('.')) {
            display.value += op;
        }
    }
}


// Function to compute the final result
function equal() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (equal) {
        display.value = 'Error';
    }
}


