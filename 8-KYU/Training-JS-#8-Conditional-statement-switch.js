// Complete function ```howManydays```, function accept 1  parameters:```month```, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

const howManydays = m => {
	let d;
	switch (m) {
		case 1:
			return (d = 31);
		case 2:
			return (d = 28);
		case 3:
			return (d = 31);
		case 4:
			return (d = 30);
		case 5:
			return (d = 31);
		case 6:
			return (d = 30);
		case 7:
			return (d = 31);
		case 8:
			return (d = 31);
		case 9:
			return (d = 30);
		case 10:
			return (d = 31);
		case 11:
			return (d = 30);
		case 12:
			return (d = 31);
	}
};
