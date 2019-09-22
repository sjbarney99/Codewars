// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

const getGrade = (s1, s2, s3) => {
	let sum = s1 + s2 + s3;
	let tot = sum / 3;

	if (tot <= 100 && tot >= 90) return "A";
	if (tot < 90 && tot >= 80) return "B";
	if (tot < 80 && tot >= 70) return "C";
	if (tot < 70 && tot >= 60) return "D";
	return "F";
};
