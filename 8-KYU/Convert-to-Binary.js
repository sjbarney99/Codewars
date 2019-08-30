// Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

const toBinary = n => {
	let b = (n * 1).toString(2);
	return parseInt(b);
};
