// Create a function that finds the integral of the expression passed.

// In order to find the integral all you need to do is add one to the exponent (the second number), and divide the coefficient by that new number (the first number).

// In 3x^2, for example, the integral would be 1x^3 (we added 1 to the exponent, and divided the coefficient by that new number).

const integrate = (c, e) => {
	let ne = e + 1;
	let nc = c / ne;
	return `${nc}x^${ne}`;
};
