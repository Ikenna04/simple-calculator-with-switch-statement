const num1 = parseFloat(prompt('Enter the first number'));
const operator = prompt('Enter the operator');
const num2 = parseFloat(prompt('Enter the second number'));

function calculator(num1, num2, operator) {
	let result, operation;
	switch (operator) {
		case '+':
			result = num1 + num2;
			operation = 'sum';
			break;
		case '-':
			result = num1 - num2;
			operation = 'difference';
			break;
		case '*':
			result = num1 * num2;
			operation = 'product';
			break;
		case '/':
			result = num1 / num2;
			operation = 'quotient';
			break;

		default:
			result = 'Invalid Operator';
	}
	console.log(result);
	alert(`The ${operation} of ${num1} and ${num2} is ${result}`);
	return result;
}

calculator(num1, num2, operator);
