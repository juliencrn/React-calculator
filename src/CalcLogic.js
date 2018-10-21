export default function getResult(text, state) {
    let output,
        {tmp, operator, lastTouched, result, lastNumber} = state,
        _r = Number(result) === 0 ? '' : result.toString(),
        operatorList = ['÷', 'x', '-', '+'],
        numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

    // Basics operators
    if (operatorList.indexOf(text) !== -1) {
        output = tmp && lastTouched === 'number' ? execCalc(_r, tmp, operator) : _r;
        operator = text;
        tmp = output;
        lastTouched = 'ope';
    }

    // Number Touchs
    if (numberList.indexOf(text) !== -1) {
        if (lastTouched !== 'number') {
            output = text;
            if (lastTouched === '=') {
                tmp = 0;
                operator = '';
            }
        } else {
            output = _r + text;
        }
        lastTouched = 'number';
    }

    // Clear all
    if (text === 'AC') {
        output = 0;
        operator = '';
        tmp = '';
        lastTouched = '';
        lastNumber = '';
    }

    // Negative touch
    if (text === "+/-") {
        output = _r.split('')[0] !== '-' ? '-' + _r : _r.substr(1);
    }

    // Percents
    if (text === '%') {
        output = !tmp ? _r / 100 : (_r * tmp) / 100;
    }

    // Total
    if (text === "=") {
        if (lastTouched === '=') {
            output = execCalc(_r, lastNumber, operator);
            lastNumber = '';
        } else {
            output = execCalc(_r, tmp, operator);
            lastNumber = result;
        }
        lastTouched = '=';
        tmp = result;
    }

    // return new state
    return {
        tmp: tmp,
        operator: operator,
        result: output.toString(),
        lastTouched: lastTouched,
        lastNumber: lastNumber,
    };
}

function execCalc(result, tmp, operator) {

    let a = Number(tmp),
        b = Number(result),
        calc;
    switch (operator) {
        case '-':
            calc = a - b;
            break;
        case '÷':
            calc = a / b;
            break;
        case 'x':
            calc = a * b;
            break;
        case '+':
            calc = a + b;
            break;
        default:
            calc = b;
            break;
    }
    return calc.toString()
}