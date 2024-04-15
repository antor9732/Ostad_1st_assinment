

function calculate() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    var result = 0;

   
    if(operation === 'addition') {
        result = number1 + number2;

    }
    else if (operation === 'subtraction') {
        result = number1 - number2;
    }
    else if(operation ===  'multiplication') {
        result = number1 * number2;

    }else if(operation === 'division') {
        if (number2!==0) {
            result = number1 / number2;
        }else{
            result="Cannot divide by zero! "
        }
    }

    if (!isNaN(result)) {
        result = parseFloat(result.toFixed(2));
    } 
    document.getElementById('result').textContent = result.toString();
}


